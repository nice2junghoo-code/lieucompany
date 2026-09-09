import Header from '../components/Header'
import CheckIcon from '../components/CheckIcon'
import logo from '../assets/lieu-logo.png'
import { PROFILE_HIGHLIGHTS, TRUST_STATS } from '../data/profile'

function About() {
  return (
    <div className="min-h-screen bg-canvas font-display text-ink">
      <Header />

      <main className="mx-auto max-w-[1200px] px-6 py-16 lg:px-8">
        {/* intro */}
        <section className="mx-auto max-w-2xl text-center">
          <span className="mb-6 inline-flex items-center rounded-full bg-canvas-soft px-3 py-1.5 text-[12px] font-[600] text-ink">
            ABOUT
          </span>

          <h1 className="text-[32px] font-[652] leading-[1.13] text-ink sm:text-[44px]">
            20년 개발자 출신, AI 교육으로 기업의 일하는 방식을 바꿉니다.
          </h1>

          <p className="mt-6 text-[20px] font-[300] leading-[1.38] text-text-muted">
            삼성전자·현대중공업 등 대기업에서 IT 시스템을 설계해 온 경험을 바탕으로, 도구 사용법이 아니라 업무의
            &apos;구조&apos;를 바꾸는 AI 교육을 제공합니다.
          </p>
        </section>

        {/* profile card, full-width */}
        <section className="mx-auto mt-16 max-w-3xl rounded-md border border-hairline-soft bg-canvas p-8">
          <span className="inline-flex items-center rounded-full bg-canvas-soft px-3 py-1.5 text-[12px] font-[600] text-ink">
            📺 EBS &lt;처음 배우는 AI&gt; 출연
          </span>

          <div className="mt-5 flex items-center gap-4">
            {/* app-icon-squircle: 30% corner radius */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[30%] bg-field p-3">
              <img src={logo} alt="LIEU" className="h-full w-full object-contain" />
            </div>
            <div>
              <p className="text-[24px] font-[652] leading-[1.25] text-ink">세이투 대표</p>
              <p className="text-[14px] font-[456] leading-[1.43] text-text-muted">
                AI 콘텐츠 교육 전문가 · 20년 차 개발자
              </p>
            </div>
          </div>

          <ul className="mt-6 grid gap-3 border-t border-hairline-soft pt-6 sm:grid-cols-2">
            {PROFILE_HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[14px] font-[456] leading-[1.43] text-ink">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* trust stats */}
        <section className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {TRUST_STATS.map((stat) => (
            <div key={stat.label} className="rounded-sm bg-canvas-soft px-4 py-5 text-center">
              <p className="text-[24px] font-[652] leading-[1.25] text-ink">{stat.value}</p>
              <p className="mt-0.5 text-[12px] font-[456] leading-[1.33] text-text-muted">{stat.label}</p>
            </div>
          ))}
        </section>
      </main>

      {/* footer: polarity-inverted ink band, closes the page */}
      <footer className="mx-4 mb-4 rounded-md bg-ink px-8 py-12 text-on-primary sm:px-12">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <img src={logo} alt="LIEU" className="h-6 w-auto invert" />
            <p className="mt-3 text-[14px] font-[456] leading-[1.43] text-text-faint">
              기업·기관 AI 교육 문의
            </p>
          </div>
          <div className="flex flex-col gap-1 text-[14px] font-[456] text-text-faint sm:text-right">
            <a href="mailto:cafelieu@naver.co" className="hover:text-on-primary">
              cafelieu@naver.co
            </a>
            <a
              href="https://instagram.com/lieucoffee"
              target="_blank"
              rel="noreferrer"
              className="hover:text-on-primary"
            >
              @lieucoffee
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default About
