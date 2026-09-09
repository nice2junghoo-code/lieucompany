import { Link } from 'react-router-dom'
import Header from '../components/Header'
import CheckIcon from '../components/CheckIcon'
import logo from '../assets/lieu-logo.png'
import heroImage from '../assets/hero-roaster.jpg'
import { PROFILE_HIGHLIGHTS, TRUST_STATS } from '../data/profile'

function Home() {
  return (
    <div className="min-h-screen bg-canvas font-display text-ink">
      <Header />

      {/* hero: full-bleed image with the headline overlaid top-left, like the Palisade reference */}
      <section className="mx-auto max-w-[1200px] px-6 pt-6 lg:px-8">
        <div className="relative overflow-hidden rounded-md bg-canvas">
          {/* hero image */}
          <img
            src={heroImage}
            alt="부자로스터 B30S"
            className="absolute inset-0 h-full w-full object-contain object-bottom sm:object-center"
          />

          {/* text, anchored top-left over the image — normal flow so the box grows to fit it */}
          <div className="relative flex min-h-[480px] flex-col items-start justify-start p-8 sm:min-h-[520px] sm:p-12 lg:min-h-[600px] lg:p-16">
            {/* opaque panel keeps the copy legible over the photo, card-feature chrome */}
            <div className="max-w-md rounded-md border border-hairline-soft bg-canvas p-6">
              {/* heading-1, stepping down through heading-3/2 on narrower viewports */}
              <h1 className="text-[26px] font-[652] leading-[1.13] text-ink sm:text-[32px] lg:text-[40px] lg:leading-[1.13]">
                BUJA ROASTER B30S
              </h1>

              {/* body-lg: the light 300-weight counterpoint to the 652 heading */}
              <p className="mt-4 text-[16px] font-[300] leading-[1.38] text-text-muted">
                스마트 기능이 탑재한 홈 로스팅 및 샘플용 로스터기
              </p>
            </div>

            <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              {/* button-primary */}
              <Link
                to="/about"
                className="inline-flex h-12 items-center justify-center rounded-full border border-transparent bg-primary px-6 text-[16px] font-[600] text-on-primary transition-all duration-150 hover:border-hairline hover:bg-canvas hover:text-ink active:scale-[0.97]"
              >
                ABOUT
              </Link>
              {/* button-outline */}
              <a
                href="#programs"
                className="inline-flex h-12 items-center justify-center rounded-full border border-hairline bg-canvas px-6 text-[16px] font-[600] text-ink transition-all duration-150 hover:border-ink hover:bg-canvas-soft active:scale-[0.97] active:bg-hairline-soft"
              >
                강의 프로그램 보기
              </a>
            </div>
          </div>
        </div>
      </section>

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
