import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase, type NewsRow } from '../lib/supabase'

function LatestNews() {
  const [posts, setPosts] = useState<NewsRow[]>([])

  useEffect(() => {
    supabase
      .from('news')
      .select('*')
      .order('date', { ascending: false })
      .limit(3)
      .then(({ data }) => setPosts(data ?? []))
  }, [])

  if (posts.length === 0) return null

  return (
    <section className="bg-canvas-soft px-6 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-baseline gap-3">
          <h2 className="text-[26px] font-[700] text-ink sm:text-[32px]">LIEU NEWS</h2>
          <p className="text-[14px] text-text-muted sm:text-[15px]">LIEU의 최신 소식들을 알려드립니다.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.id} to={`/news/${post.id}`} className="group block">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-canvas">
                {post.image_url ? (
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-[13px] text-text-muted">이미지 준비 중</div>
                )}
              </div>

              <div className="mt-4 flex items-center gap-2 text-[13px]">
                <span className="font-[700] text-red-600">뉴스</span>
                <span className="text-text-muted">{post.date}</span>
              </div>
              <p className="mt-2 line-clamp-2 text-[17px] font-[600] leading-[1.4] text-ink">{post.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestNews
