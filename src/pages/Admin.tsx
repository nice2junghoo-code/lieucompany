import { useEffect, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Session } from '@supabase/supabase-js'
import { supabase, type NewsRow } from '../lib/supabase'

const emptyForm = { id: '', date: '', title: '', imageFile: null as File | null }

function Admin() {
  const navigate = useNavigate()
  const [session, setSession] = useState<Session | null | 'loading'>('loading')
  const [posts, setPosts] = useState<NewsRow[]>([])
  const [form, setForm] = useState(emptyForm)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

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
      .then(({ data }) => setPosts(data ?? []))
  }

  useEffect(() => {
    if (session && session !== 'loading') loadPosts()
  }, [session])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/admin/login')
  }

  const startEdit = (post: NewsRow) => {
    setForm({ id: post.id, date: post.date, title: post.title, imageFile: null })
    setError('')
  }

  const resetForm = () => setForm(emptyForm)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setSaving(true)

    try {
      let imageUrl: string | undefined
      if (form.imageFile) {
        const path = `${Date.now()}-${form.imageFile.name}`
        const { error: uploadError } = await supabase.storage.from('lieucompany').upload(path, form.imageFile)
        if (uploadError) throw uploadError
        imageUrl = supabase.storage.from('lieucompany').getPublicUrl(path).data.publicUrl
      }

      if (form.id) {
        const update: Partial<NewsRow> = { date: form.date, title: form.title }
        if (imageUrl) update.image_url = imageUrl
        const { error: updateError } = await supabase.from('news').update(update).eq('id', form.id)
        if (updateError) throw updateError
      } else {
        const { error: insertError } = await supabase
          .from('news')
          .insert({ date: form.date, title: form.title, image_url: imageUrl ?? null })
        if (insertError) throw insertError
      }

      resetForm()
      loadPosts()
    } catch {
      setError('저장에 실패했습니다. 다시 시도해 주세요.')
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
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setForm((f) => ({ ...f, imageFile: e.target.files?.[0] ?? null }))}
              className="w-full text-[13px] text-text-muted"
            />
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
                <p className="text-[13px] text-text-muted">{post.date}</p>
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
