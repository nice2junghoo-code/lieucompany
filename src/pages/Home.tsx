import Header from '../components/Header'
import QuickMenu from '../components/QuickMenu'
import ProductCatalog from '../components/ProductCatalog'
import HeroCarousel from '../components/HeroCarousel'

function Home() {
  return (
    <div className="min-h-screen bg-canvas font-display text-ink">
      <Header />

      <HeroCarousel />

      <QuickMenu />

      {/* product catalog — category filter + matching model cards */}
      <section className="bg-canvas pt-8 pb-16 lg:pt-10 lg:pb-20">
        <ProductCatalog />
      </section>

      {/* instagram feed */}
      <section className="border-t border-hairline-soft bg-canvas px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1400px] text-center">
          <a
            href="https://instagram.com/lieucoffee"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-[24px] font-[652] text-ink hover:text-text-muted"
          >
            리우컴퍼니 소식
          </a>

          {/* hashtags */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {['#리우컴퍼니', '#부자로스터', '#리우커피', '#전기식로스터기', '#뎀트럭', '#뎀트럭트롤리'].map((tag) => (
              <span
                key={tag}
                className="rounded-sm border border-hairline-soft bg-canvas-soft px-4 py-2 text-[13px] font-[600] text-ink"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8">
            {/* SnapWidget — snapwidget.js (loaded in index.html) auto-resizes the height */}
            <iframe
              src="https://snapwidget.com/embed/1130381"
              className="snapwidget-widget"
              frameBorder="0"
              scrolling="no"
              style={{ border: 'none', overflow: 'hidden', width: '100%' }}
              title="Posts from Instagram"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
