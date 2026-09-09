import { Link } from 'react-router-dom'
import Header from '../components/Header'
import CheckIcon from '../components/CheckIcon'
import logo from '../assets/lieu-logo.png'
import { PROFILE_HIGHLIGHTS, TRUST_STATS } from '../data/profile'

function Home() {
  return (
    <div className="min-h-screen bg-canvas font-display text-ink">
      <Header />

      <main className="mx-auto grid min-h-[calc(100vh-88px)] max-w-[1200px] grid-cols-1 content-center items-center gap-16 px-6 py-16 lg:grid-cols-2 lg:gap-12 lg:px-8">
        {/* left column */}
        <section className="flex flex-col items-start">
          {/* button-pill-soft, used as an eyebrow tag */}
          <span className="mb-6 inline-flex items-center rounded-full bg-canvas-soft px-3 py-1.5 text-[12px] font-[600] text-ink">
            기업·기관 AI 교육 전문 강사
          </span>

          {/* heading-1, stepping down through heading-3/2 on narrower viewports */}
          <h1 className="text-[32px] font-[652] leading-[1.13] text-ink sm:text-[44px] lg:text-[56px] lg:leading-[1.0]">
            체계적인 관리 시스템을 기반으로 한
            <br />
            서비스 경쟁력
          </h1>

          {/* body-lg: the light 300-weight counterpoint to the 652 heading */}
          <p className="mt-6 max-w-xl text-[20px] font-[300] leading-[1.38] text-text-muted">
            리우컴퍼니에서 공급한 제품 설비에 대한 사후관리가 완벽하게 이루어질 수 있도록 전국망의 서비스를 운영하고
            있습니다. 영업 및 서비스망은 앞으로 꾸준히 확대될 것이며, 커피 시장을 선도하는 제품과 서비스를 제공하기
            위해 더욱 성장해 나갈 것을 약속드립니다.
          </p>

          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
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
        </section>

        {/* right column: pricing-card chrome, shadow-free */}
        <section className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md rounded-md border border-hairline-soft bg-canvas p-6">
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
      </main>
    </div>
  )
}

export default Home
