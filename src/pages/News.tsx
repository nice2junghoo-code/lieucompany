import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { NEWS } from '../data/news'

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0 text-ink" aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M17 17l-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function News() {
  const [query, setQuery] = useState('')
  const filtered = NEWS.filter((item) => item.title.includes(query.trim()))

  return (
    <div className="min-h-screen bg-canvas font-display text-ink">
      <Header />

      <main className="py-16 lg:py-20">
        <h1 className="px-6 text-center text-[28px] font-[652] leading-[1.13] text-ink sm:text-[40px]">뉴스</h1>
        <p className="mt-4 px-6 text-center text-[15px] font-[456] text-text-muted sm:text-[17px]">LIEU의 최신 소식들을 알려드립니다.</p>

        <div className="mx-auto mt-12 max-w-[1400px] px-6 lg:px-10">
          {/* search */}
          <div className="flex justify-end">
            <div className="flex w-full max-w-[340px] items-center gap-2 border-b border-hairline py-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="찾으시는 검색어를 입력하세요."
                className="w-full bg-transparent text-[14px] text-ink placeholder:text-text-muted focus:outline-none"
              />
              <SearchIcon />
            </div>
          </div>

          {/* grid */}
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <a key={item.id} href="#" onClick={(e) => e.preventDefault()} className="group block">
                <div className="aspect-video w-full overflow-hidden bg-canvas-soft">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-[13px] text-text-muted">이미지 준비 중</div>
                  )}
                </div>
                <p className="mt-4 text-[14px] text-text-muted">{item.date}</p>
                <p className="mt-2 line-clamp-2 text-[17px] font-[600] leading-[1.4] text-ink">{item.title}</p>
              </a>
            ))}
          </div>

          {filtered.length === 0 && <p className="py-20 text-center text-[14px] text-text-muted">검색 결과가 없습니다.</p>}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default News
