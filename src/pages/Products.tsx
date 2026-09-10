import Header from '../components/Header'

const CATEGORIES = ['모든모델', '전기식로스터기', '가스식로스터기', '소형로스터기', '대형로스터기', '테이블', '뎀트럭트롤리']

function Products() {
  return (
    <div className="min-h-screen bg-canvas font-display text-ink">
      <Header />

      <main className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
        <h1 className="text-center text-[28px] font-[652] leading-[1.13] text-ink sm:text-[40px]">제품</h1>

        <div className="mt-10 flex gap-2 overflow-x-auto px-6 sm:flex-wrap sm:items-center sm:justify-center sm:overflow-visible sm:px-0">
          {CATEGORIES.map((label) => (
            <a
              key={label}
              href="#"
              className="shrink-0 rounded-sm border border-hairline bg-canvas px-3 py-1.5 text-[11px] font-[600] whitespace-nowrap text-ink transition-colors hover:border-ink hover:bg-ink hover:text-on-primary sm:text-[12px]"
            >
              {label}
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Products
