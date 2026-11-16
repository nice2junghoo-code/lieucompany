import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase, RELOCATION_CATEGORY, type NewsRow } from '../lib/supabase'

const PAGE_SIZE = 6

// 이전 설치 사례 posts: written in /admin with the category "이전 설치 사례" and listed here as photo cards.
// Hidden while there are no posts (or while the category column does not exist yet), so the page looks unchanged until the first post.
function RelocationPosts() {
  const [posts, setPosts] = useState<NewsRow[]>([])
  const [visible, setVisible] = useState(PAGE_SIZE)

  useEffect(() => {
    supabase
      .from('news')
      .select('*')
      .eq('category', RELOCATION_CATEGORY)
      .order('date', { ascending: false })
      .then(({ data, error }) => {
        if (error) return
        setPosts(data ?? [])
      })
  }, [])

  if (posts.length === 0) return null

  return (
    <div className="mx-auto mt-16 max-w-[1400px] lg:mt-20">
      <h2 className="text-[22px] font-[700] text-ink sm:text-[26px]">이전 설치 사례</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, visible).map((post) => (
          <Link key={post.id} to={`/news/${post.id}`} className="group block">
            <div className="aspect-video w-full overflow-hidden bg-canvas-soft">
              {post.image_url ? (
                <img
                  src={post.image_url}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[13px] text-text-muted">이미지 준비 중</div>
              )}
            </div>
            <p className="mt-4 text-[14px] text-text-muted">{post.date}</p>
            <p className="mt-2 line-clamp-2 text-[17px] font-[600] leading-[1.4] text-ink">{post.title}</p>
          </Link>
        ))}
      </div>

      {visible < posts.length && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="rounded-none border border-ink px-8 py-3 text-[14px] font-[600] text-ink transition-colors hover:bg-ink hover:text-on-primary"
          >
            더보기
          </button>
        </div>
      )}
    </div>
  )
}

export default RelocationPosts
