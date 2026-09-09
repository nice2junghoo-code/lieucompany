import Header from '../components/Header'
import QuickMenu from '../components/QuickMenu'
import CheckIcon from '../components/CheckIcon'
import logo from '../assets/lieu-logo.png'
import heroImage from '../assets/hero-roaster.png'
import { PROFILE_HIGHLIGHTS, TRUST_STATS } from '../data/profile'

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

      <QuickMenu />

      {/* profile card, below the hero */}
      <section className="mx-auto max-w-[1200px] px-6 pb-16 lg:px-8 lg:pb-24">
        <div className="mx-auto w-full max-w-md rounded-md border border-hairline-soft bg-canvas p-6">
          {/* button-pill-soft */}
          <span className="inline-flex items-center rounded-full bg-canvas-soft px-3 py-1.5 text-[12px] font-[600] text-ink">
            📺 EBS &lt;처음 배우는 AI&gt; 출연
          </span>

          <div className="mt-5 flex items-center gap-4">
            {/* app-icon-squircle: 30% corner radius */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[30%] bg-field p-2.5">
              <img src={logo} alt="LIEU" className="h-full w-full object-contain" />
            </div>
            <div>
              {/* heading-4 */}
              <p className="text-[24px] font-[652] leading-[1.25] text-ink">세이투 대표</p>
              {/* body-sm */}
              <p className="text-[14px] font-[456] leading-[1.43] text-text-muted">
                AI 콘텐츠 교육 전문가 · 20년 차 개발자
              </p>
            </div>
          </div>

          <ul className="mt-6 space-y-3 border-t border-hairline-soft pt-6">
            {PROFILE_HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[14px] font-[456] leading-[1.43] text-ink">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-hairline-soft pt-6">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="rounded-sm bg-canvas-soft px-4 py-3 text-center">
                {/* heading-4 */}
                <p className="text-[24px] font-[652] leading-[1.25] text-ink">{stat.value}</p>
                {/* caption */}
                <p className="mt-0.5 text-[12px] font-[456] leading-[1.33] text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* instagram feed — swap the placeholder for the SnapWidget embed code once it's ready */}
      <section className="border-t border-hairline-soft bg-canvas-soft px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1400px] text-center">
          <p className="text-[13px] font-[600] text-text-muted">INSTAGRAM</p>
          <a
            href="https://instagram.com/lieucoffee"
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-block text-[24px] font-[652] text-ink hover:text-text-muted"
          >
            @lieucoffee
          </a>

          <div className="mt-8">
            {/* SnapWidget — snapwidget.js (loaded in index.html) auto-resizes the height */}
            <iframe
              src="https://snapwidget.com/embed/1130380"
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
