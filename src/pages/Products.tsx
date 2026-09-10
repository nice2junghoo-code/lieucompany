import Header from '../components/Header'

const CATEGORIES = ['모든모델', '전기식로스터기', '가스식로스터기', '소형로스터기', '대형로스터기', '테이블', '뎀트럭트롤리']

function Products() {
  return (
    <div className="min-h-screen bg-canvas font-display text-ink">
      <Header />

      <main className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
        <h1 className="text-center text-[28px] font-[652] leading-[1.13] text-ink sm:text-[40px]">제품</h1>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {CATEGORIES.map((label) => (
            <a
              key={label}
              href="#"
              className="rounded-sm border border-hairline bg-canvas px-6 py-3 text-[14px] font-[600] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-on-primary"
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
