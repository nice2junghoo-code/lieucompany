import Header from '../components/Header'
import QuickMenu from '../components/QuickMenu'
import CheckIcon from '../components/CheckIcon'
import logo from '../assets/lieu-logo.png'
import heroImage from '../assets/hero-roaster.jpg'
import { PROFILE_HIGHLIGHTS, TRUST_STATS } from '../data/profile'

function Home() {
  return (
    <div className="min-h-screen bg-canvas font-display text-ink">
      <Header />

      {/* hero: stacked text-then-image on mobile, true full-bleed overlay from lg up — like hyundai.com */}
      <section className="relative w-full overflow-hidden bg-canvas">
        <div className="relative lg:h-[680px]">
          {/* text: normal flow (sits above the image) below lg, overlaid on the image's clear left side from lg up */}
          <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-start px-6 pt-10 pb-6 sm:pt-14 lg:absolute lg:inset-0 lg:h-full lg:justify-center lg:px-8 lg:py-0">
            <div className="max-w-md">
              {/* small label above the title */}
              <p className="text-[13px] font-[456] text-text-muted">ER (Electric Roaster)</p>

              {/* heading-1, stepping down through heading-3/2 on narrower viewports */}
              <h1 className="mt-1 text-[28px] font-[652] leading-[1.13] text-ink sm:text-[40px] lg:text-[56px] lg:leading-[1.0]">
                BUJA ROASTER
                <br />
                B30S
              </h1>

              {/* body-lg: the light 300-weight counterpoint to the 652 heading */}
              <p className="mt-4 text-[16px] font-[300] leading-[1.38] text-text-muted sm:text-[18px]">
                스마트 기능이 탑재한 홈 로스팅 및 샘플용 로스터기
              </p>

              {/* small spec chip */}
              <div className="mt-4 inline-flex items-center rounded-sm border border-hairline bg-canvas px-3 py-1.5 text-[13px] font-[456] text-ink">
                적정 투입량 100g~300g
              </div>
            </div>
          </div>

          {/* image: normal flow (sits below the text) below lg, docks to the right as a full-bleed overlay from lg up */}
          <div className="aspect-square w-full sm:aspect-[16/10] lg:absolute lg:inset-0 lg:aspect-auto">
            <img
              src={heroImage}
              alt="BUJA ROASTER B30S"
              className="h-full w-full object-contain lg:object-right"
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
    </div>
  )
}

export default Home
