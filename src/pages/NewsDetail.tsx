import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { supabase, type NewsRow } from '../lib/supabase'

function NewsDetail() {
  const { id } = useParams()
  const [post, setPost] = useState<NewsRow | null | 'loading'>('loading')

  useEffect(() => {
    if (!id) return
    supabase
      .from('news')
      .select('*')
      .eq('id', id)
      .single()
      .then(({ data }) => setPost(data ?? null))
  }, [id])

  return (
    <div className="min-h-screen bg-canvas font-display text-ink">
      <Header />

      <main className="py-16 lg:py-20">
        <div className="mx-auto max-w-[820px] px-6 lg:px-10">
          <Link to="/news" className="text-[13px] font-[600] text-text-muted hover:text-ink">
            ← 목록으로
          </Link>

          {post === 'loading' && <p className="py-20 text-center text-[14px] text-text-muted">불러오는 중...</p>}

          {post === null && <p className="py-20 text-center text-[14px] text-text-muted">게시글을 찾을 수 없습니다.</p>}

          {post && post !== 'loading' && (
            <article className="mt-6">
              <p className="text-[14px] text-text-muted">{post.date}</p>
              <h1 className="mt-2 text-[24px] font-[652] leading-[1.3] text-ink sm:text-[32px]">{post.title}</h1>

              {post.image_url && (
                <div className="mt-8 aspect-video w-full overflow-hidden bg-canvas-soft">
                  <img src={post.image_url} alt={post.title} className="h-full w-full object-cover" />
                </div>
              )}

              <div className="mt-8 whitespace-pre-wrap text-[16px] leading-[1.7] text-ink">{post.content}</div>
            </article>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default NewsDetail
