import { useEffect, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Session } from '@supabase/supabase-js'
import { supabase, NEWS_CATEGORY, RELOCATION_CATEGORY, type NewsRow } from '../lib/supabase'

const MAX_IMAGES = 5

// originalCategory lets the save step send `category` only when it matters: plain news posts are saved exactly as before.
// Photos: keptImages are the already-uploaded ones still on the post, imageFiles the new picks; together at most MAX_IMAGES, first = cover.
const emptyForm = {
  id: '',
  date: '',
  title: '',
  content: '',
  imageFiles: [] as File[],
  keptImages: [] as string[],
  originalImages: [] as string[],
  hasImagesColumn: false,
  category: NEWS_CATEGORY,
  originalCategory: NEWS_CATEGORY,
}

function Admin() {
  const navigate = useNavigate()
  const [session, setSession] = useState<Session | null | 'loading'>('loading')
  const [posts, setPosts] = useState<NewsRow[]>([])
  const [form, setForm] = useState(emptyForm)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  // changing the key clears the (uncontrolled) file input after a save / cancel
  const [fileInputKey, setFileInputKey] = useState(0)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        navigate('/admin/login')
        return
      }
      setSession(data.session)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      if (!newSession) navigate('/admin/login')
    })
    return () => listener.subscription.unsubscribe()
  }, [navigate])

  const loadPosts = () => {
    supabase
      .from('news')
      .select('*')
      .order('date', { ascending: false })
      .then(({ data, error }) => {
        if (error) console.error('뉴스 목록 조회 실패:', error.message)
        setPosts(data ?? [])
      })
  }

  useEffect(() => {
    if (session && session !== 'loading') loadPosts()
  }, [session])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/admin/login')
  }

  const startEdit = (post: NewsRow) => {
    const category = post.category ?? NEWS_CATEGORY
    const photos = post.images && post.images.length > 0 ? post.images : post.image_url ? [post.image_url] : []
    setForm({
      id: post.id,
      date: post.date,
      title: post.title,
      content: post.content ?? '',
      imageFiles: [],
      keptImages: photos,
      originalImages: photos,
      hasImagesColumn: post.images !== undefined,
      category,
      originalCategory: category,
    })
    setFileInputKey((k) => k + 1)
    setError('')
  }

  const resetForm = () => {
    setForm(emptyForm)
    setFileInputKey((k) => k + 1)
  }

  const handleFilesPicked = (files: FileList | null) => {
    const picked = Array.from(files ?? [])
    const room = MAX_IMAGES - form.keptImages.length
    if (picked.length > room) {
      setError(`사진은 한 글에 최대 ${MAX_IMAGES}장까지예요. 앞에서부터 ${Math.max(room, 0)}장만 올라갑니다.`)
    } else {
      setError('')
    }
    setForm((f) => ({ ...f, imageFiles: picked.slice(0, Math.max(room, 0)) }))
  }

  const removeKeptImage = (url: string) => {
    setError('')
    setForm((f) => ({ ...f, keptImages: f.keptImages.filter((u) => u !== url) }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setSaving(true)

    try {
      // upload the new photos one by one (keeps the order they were picked in)
      const uploaded: string[] = []
      for (const [i, file] of form.imageFiles.entries()) {
        const path = `${Date.now()}-${i}-${file.name}`
        const { error: uploadError } = await supabase.storage.from('lieucompany').upload(path, file)
        if (uploadError) throw uploadError
        uploaded.push(supabase.storage.from('lieucompany').getPublicUrl(path).data.publicUrl)
      }
      const photos = [...form.keptImages, ...uploaded]
      const photosChanged = uploaded.length > 0 || form.keptImages.length !== form.originalImages.length

      if (form.id) {
        const update: Partial<NewsRow> = { date: form.date, title: form.title, content: form.content }
        if (photosChanged) {
          update.image_url = photos[0] ?? null
          // `images` (the full list) is only sent when it is needed, so single-photo posts keep working before the column exists
          if (photos.length > 1 || form.hasImagesColumn) update.images = photos
        }
        if (form.category !== form.originalCategory) update.category = form.category
        const { error: updateError } = await supabase.from('news').update(update).eq('id', form.id)
        if (updateError) throw updateError
      } else {
        const insert: Partial<NewsRow> = { date: form.date, title: form.title, content: form.content, image_url: photos[0] ?? null }
        if (photos.length > 1) insert.images = photos
        if (form.category !== NEWS_CATEGORY) insert.category = form.category
        const { error: insertError } = await supabase.from('news').insert(insert)
        if (insertError) throw insertError
      }

      resetForm()
      loadPosts()
    } catch (err) {
      const message = err instanceof Error ? err.message : JSON.stringify(err)
      setError(`저장 실패: ${message}`)
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!window.confirm('이 게시글을 삭제할까요?')) return
    await supabase.from('news').delete().eq('id', id)
    loadPosts()
  }

  if (session === 'loading') return null

  return (
    <div className="min-h-screen bg-canvas-soft font-display text-ink">
      <div className="mx-auto max-w-[900px] px-6 py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-[24px] font-[652] text-ink">뉴스 관리</h1>
          <button type="button" onClick={handleLogout} className="text-[13px] font-[600] text-text-muted hover:text-ink">
            로그아웃
          </button>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit} className="mt-8 border border-hairline bg-canvas p-6">
          <h2 className="text-[15px] font-[600] text-ink">{form.id ? '게시글 수정' : '새 게시글 작성'}</h2>

          <div className="mt-4 flex flex-col gap-3">
            {/* where the post shows up: 뉴스 page, or the bottom of the 이전 설치 page */}
            <select
              value={form.category}
              onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
              className="w-full rounded-none border border-hairline bg-canvas px-4 py-2.5 text-[14px] text-ink focus:border-ink focus:outline-none"
            >
              <option value={NEWS_CATEGORY}>뉴스</option>
              <option value={RELOCATION_CATEGORY}>이전 설치 사례</option>
            </select>
            <input
              type="date"
              required
              value={form.date}
              onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
              className="w-full rounded-none border border-hairline bg-canvas px-4 py-2.5 text-[14px] text-ink focus:border-ink focus:outline-none"
            />
            <input
              type="text"
              required
              value={form.title}
              onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              placeholder="제목"
              className="w-full rounded-none border border-hairline bg-canvas px-4 py-2.5 text-[14px] text-ink placeholder:text-text-muted focus:border-ink focus:outline-none"
            />
            <textarea
              required
              rows={8}
              value={form.content}
              onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
              placeholder="내용"
              className="w-full resize-y rounded-none border border-hairline bg-canvas px-4 py-2.5 text-[14px] text-ink placeholder:text-text-muted focus:border-ink focus:outline-none"
            />
            <div>
              <p className="text-[13px] font-[600] text-ink">
                사진 (최대 {MAX_IMAGES}장 · 첫 번째 사진이 대표 사진) — 현재 {form.keptImages.length + form.imageFiles.length}장
              </p>

              {form.keptImages.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {form.keptImages.map((url, i) => (
                    <div key={url} className="relative h-20 w-20 border border-hairline bg-canvas-soft">
                      <img src={url} alt={`사진 ${i + 1}`} className="h-full w-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeKeptImage(url)}
                        aria-label={`사진 ${i + 1} 삭제`}
                        className="absolute top-0 right-0 bg-ink px-1.5 text-[12px] leading-5 text-on-primary"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {form.keptImages.length < MAX_IMAGES && (
                <input
                  key={fileInputKey}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => handleFilesPicked(e.target.files)}
                  className="mt-2 w-full text-[13px] text-text-muted"
                />
              )}
              <p className="mt-1 text-[12px] text-text-muted">여러 장은 한 번에 선택해 주세요. 선택한 순서대로 올라가요.</p>
            </div>
          </div>

          {error && <p className="mt-3 text-[13px] text-red-600">{error}</p>}

          <div className="mt-5 flex gap-2">
            <button
              type="submit"
              disabled={saving}
              className="rounded-none border border-ink bg-ink px-5 py-2.5 text-[13px] font-[600] text-on-primary transition-colors hover:bg-canvas hover:text-ink disabled:opacity-50"
            >
              {saving ? '저장 중...' : form.id ? '수정 완료' : '등록'}
            </button>
            {form.id && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-none border border-hairline bg-canvas px-5 py-2.5 text-[13px] font-[600] text-ink hover:border-ink"
              >
                취소
              </button>
            )}
          </div>
        </form>

        {/* list */}
        <div className="mt-10 flex flex-col gap-3">
          {posts.length === 0 && <p className="py-10 text-center text-[14px] text-text-muted">등록된 게시글이 없습니다.</p>}

          {posts.map((post) => (
            <div key={post.id} className="flex items-center justify-between gap-4 border border-hairline bg-canvas px-5 py-4">
              <div className="min-w-0">
                <p className="text-[13px] text-text-muted">
                  {post.date}
                  {post.category === RELOCATION_CATEGORY && <span className="ml-2 font-[700] text-red-600">이전 설치 사례</span>}
                </p>
                <p className="truncate text-[15px] font-[600] text-ink">{post.title}</p>
              </div>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => startEdit(post)}
                  className="rounded-none border border-hairline px-3 py-1.5 text-[12px] font-[600] text-ink hover:border-ink"
                >
                  수정
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(post.id)}
                  className="rounded-none border border-hairline px-3 py-1.5 text-[12px] font-[600] text-red-600 hover:border-red-600"
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Admin
