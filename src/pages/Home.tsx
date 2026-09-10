import Header from '../components/Header'
import QuickMenu from '../components/QuickMenu'
import ProductCatalog from '../components/ProductCatalog'
import heroImage from '../assets/hero-roaster.png'
import heroImageB80S from '../assets/hero-roaster-b80s.png'

function Home() {
  return (
    <div className="min-h-screen bg-canvas font-display text-ink">
      <Header />

      {/* hero: text top-left, product photo centered below it — stacked at every breakpoint so they never overlap */}
      <section className="relative w-full overflow-hidden bg-canvas">
        <div className="mx-auto max-w-[1400px] px-6 pt-10 sm:pt-14 lg:px-10 lg:pt-16">
          <div className="max-w-md animate-[slide-in-right_0.7s_ease-out_both]">
            {/* heading-1, stepping down through heading-3/2 on narrower viewports */}
            <h1 className="text-[32px] font-[652] leading-[1.13] text-ink sm:text-[48px] lg:text-[64px] lg:leading-[1.0]">
              <span className="lg:whitespace-nowrap">BUJA ROASTER</span>
              <br />
              B30S
            </h1>

            {/* body-lg, bumped to a bold weight */}
            <p className="mt-4 text-[16px] font-[600] leading-[1.38] text-ink sm:text-[18px]">
              스마트 기능이 탑재한 홈 로스팅 및 샘플용 로스터기
            </p>

            {/* small spec chip */}
            <div className="mt-4 inline-flex items-center rounded-sm border border-hairline bg-canvas px-3 py-1.5 text-[13px] font-[456] text-ink">
              적정 투입량 100g~300g
            </div>
          </div>
        </div>

        {/* product photo — soft studio-style gradient, seamless into the icon row below */}
        <div className="w-full bg-gradient-to-b from-canvas via-canvas-soft to-canvas-soft">
          <div className="relative mx-auto aspect-[1005/877] w-full max-w-[260px] px-6 pt-6 pb-10 sm:max-w-md sm:pt-0 sm:pb-14 lg:max-w-xl lg:px-10 lg:pb-16">
            <img
              src={heroImage}
              alt="BUJA ROASTER B30S"
              className="relative h-full w-full object-contain animate-[slide-in-right_0.7s_ease-out_0.25s_both]"
            />
          </div>
        </div>
      </section>

      {/* hero 2: B80S — same layout/animation pattern as the B30S hero above, image sized up for the larger machine */}
      <section className="relative w-full overflow-hidden bg-canvas">
        <div className="mx-auto max-w-[1400px] px-6 pt-10 sm:pt-14 lg:px-10 lg:pt-16">
          <div className="max-w-md animate-[slide-in-right_0.7s_ease-out_both]">
            <h1 className="text-[32px] font-[652] leading-[1.13] text-ink sm:text-[48px] lg:text-[64px] lg:leading-[1.0]">
              <span className="lg:whitespace-nowrap">BUJA ROASTER</span>
              <br />
              B80S
            </h1>

            <p className="mt-4 text-[16px] font-[600] leading-[1.38] text-ink sm:text-[18px]">
              초보자부터 전문가까지 수준 높은 로스팅 구현
            </p>

            <div className="mt-4 inline-flex items-center rounded-sm border border-hairline bg-canvas px-3 py-1.5 text-[13px] font-[456] text-ink">
              적정 투입량 300g~800g(최대1kg)
            </div>
          </div>
        </div>

        <div className="w-full bg-gradient-to-b from-canvas via-canvas-soft to-canvas-soft">
          <div className="relative mx-auto aspect-[943/807] w-full max-w-[280px] px-6 pt-6 pb-10 sm:max-w-lg sm:pt-0 sm:pb-14 lg:max-w-2xl lg:px-10 lg:pb-16">
            <img
              src={heroImageB80S}
              alt="BUJA ROASTER B80S"
              className="relative h-full w-full object-contain animate-[slide-in-right_0.7s_ease-out_0.25s_both]"
            />
          </div>
        </div>
      </section>

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
