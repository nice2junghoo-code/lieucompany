import Header from '../components/Header'
import aboutPhoto from '../assets/about-photo.jpg'

function About() {
  return (
    <div className="min-h-screen bg-canvas font-display text-ink">
      <Header />

      {/* warm editorial "one-pager" treatment, per the supplied 1p.jpg reference */}
      <main className="bg-[#f3ede2]">
        <div className="mx-auto max-w-[1000px] px-6 py-16 sm:px-10 lg:px-8 lg:py-24">
          <p className="text-[13px] font-[456] tracking-wide text-ink-soft">01&nbsp;&nbsp;|&nbsp;&nbsp;About us</p>

          {/* heading + photo */}
          <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div className="flex items-start gap-6">
              <div className="h-24 w-3.5 shrink-0 bg-[#c8a67b] sm:h-28" />
              <div>
                <h1
                  className="text-[52px] leading-[0.95] font-medium text-ink italic sm:text-[64px]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  About
                  <br />
                  US
                </h1>
                <div className="mt-8 h-px w-36 bg-ink" />
              </div>
            </div>

            <div className="aspect-[4/5] w-full max-w-sm justify-self-start overflow-hidden rounded-sm lg:justify-self-end">
              <img src={aboutPhoto} alt="lieucoffee roasters" className="h-full w-full object-cover" />
            </div>
          </div>

          {/* company copy */}
          <div className="mt-16 max-w-2xl space-y-6 text-[15px] leading-[1.9] text-ink-soft">
            <p>
              2014년 설립된 리우컴퍼니는 커피 관련 전문 장비를 한국 시장에 소개하고 유통하는 회사입니다. 고품질
              커피 문화를 확산시키기 위해, 해외 우수한 커피 장비 브랜드와 제품 소싱에 끊임없이 노력하고
              있습니다. 특히, 리우컴퍼니는 1인 운송 솔루션 분야에서 세계적으로 인정받고 있는 덤트럭(Demtruck)
              트롤리 브랜드와 독점 수입 및 공식 수입 계약을 체결하여, 국내 시장에 덤트럭 제품을 처음으로
              선보이게 되었습니다.
            </p>
            <p>
              덤트럭 트롤리는 효율성과 내구성을 갖춘 1인 운송 솔루션으로, 소규모 물류, 창고 관리, 1인 카페 창업
              컨설팅 사업자 등 다양한 분야에서 최적의 퍼포먼스를 제공합니다.
            </p>
            <p>
              또한 국내 대표 로스터기 브랜드인 부자로스터(Buja Roaster)와 공식 판매 대리점 계약을 체결하여,
              10년 이상 부자로스터기의 다양한 모델을 안정적으로 공급하고 있으며, 오랜 기간 축적된 기술력과
              신뢰성을 바탕으로 리우컴퍼니는 고객에게 최적의 로스팅 솔루션을 제공합니다.
            </p>
          </div>

          {/* service competitiveness */}
          <div className="mt-16 max-w-2xl">
            <h2 className="text-[20px] font-[652] text-ink">체계적인 관리 시스템을 기반으로 한 서비스 경쟁력</h2>
            <p className="mt-3 text-[15px] leading-[1.9] text-ink-soft">
              리우컴퍼니에서 공급한 제품 설비에 대한 사후관리가 완벽하게 이루어질 수 있도록 전국망의 서비스를
              운영하고 있습니다. 영업 및 서비스망은 앞으로 꾸준히 확대될 것이며, 커피 시장을 선도하는 제품과
              서비스를 제공하기 위해 더욱 성장해 나갈 것을 약속드립니다.
            </p>
          </div>

          {/* customer center + instagram */}
          <div className="mt-24 flex flex-col gap-12 border-t border-ink/10 pt-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-[20px] font-[652] tracking-tight text-ink">CUSTOMER CENTER.</h3>
              <dl className="mt-4 space-y-1.5 text-[14px] font-[456] text-ink-soft">
                <div className="flex gap-2">
                  <dt className="font-[652] text-ink">A.</dt>
                  <dd>경기도 남양주시 다산중앙로 19번길 21 블루웨일 1차 10층 1011호</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-[652] text-ink">T.</dt>
                  <dd>
                    <a href="tel:010-7466-2744" className="hover:text-ink">
                      010-7466-2744
                    </a>
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-[652] text-ink">E.</dt>
                  <dd>
                    <a href="mailto:cafelieu@naver.com" className="hover:text-ink">
                      cafelieu@naver.com
                    </a>
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-[652] text-ink">W.</dt>
                  <dd>
                    <a href="https://lieucoffeemall.com" target="_blank" rel="noreferrer" className="hover:text-ink">
                      lieucoffeemall.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <p className="text-[26px] text-ink" style={{ fontFamily: "'Caveat', cursive" }}>
                instagram
              </p>
              <div className="mt-2 space-y-2 text-[15px] font-[456] text-ink-soft">
                <a
                  href="https://instagram.com/lieucoffee"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-ink"
                >
                  <InstagramIcon />
                  lieucoffee
                </a>
                <a
                  href="https://instagram.com/lieu.company"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-ink"
                >
                  <InstagramIcon />
                  lieu.company
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 shrink-0" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  )
}

export default About
