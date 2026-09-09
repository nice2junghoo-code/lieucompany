import Header from '../components/Header'
import aboutPhoto from '../assets/about-photo.jpg'

function About() {
  return (
    <div className="min-h-screen bg-canvas font-display text-ink">
      <Header />

      {/* large image up top, nothing else */}
      <img
        src={aboutPhoto}
        alt="lieucoffee roasters"
        className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[600px]"
      />

      {/* centered heading + one-line summary, typography matched to the main page */}
      <div className="mx-auto max-w-[1200px] px-6 py-16 text-center lg:px-8 lg:py-24">
        <h1 className="text-[28px] font-[652] leading-[1.13] text-ink sm:text-[40px] lg:text-[56px] lg:leading-[1.0]">
          ABOUT US
        </h1>
        <div className="mx-auto mt-6 max-w-2xl space-y-5 text-[16px] font-[300] leading-[1.38] text-text-muted sm:text-[18px]">
          <p>
            2014년 설립된 리우컴퍼니는 커피 관련 전문 장비를 한국 시장에 소개하고 유통하는 회사입니다. 고품질
            커피 문화를 확산시키기 위해, 해외 우수한 커피 장비 브랜드와 제품 소싱에 끊임없이 노력하고 있습니다.
            특히, 리우컴퍼니는 1인 운송 솔루션 분야에서 세계적으로 인정받고 있는 덤트럭(Demtruck) 트롤리
            브랜드와 독점 수입 및 공식 수입 계약을 체결하여, 국내 시장에 덤트럭 제품을 처음으로 선보이게
            되었습니다.
          </p>
          <p>
            덤트럭 트롤리는 효율성과 내구성을 갖춘 1인 운송 솔루션으로, 소규모 물류, 창고 관리, 1인 카페 창업
            컨설팅 사업자 등 다양한 분야에서 최적의 퍼포먼스를 제공합니다.
          </p>
          <p>
            또한 국내 대표 로스터기 브랜드인 부자로스터(Buja Roaster)와 공식 판매 대리점 계약을 체결하여, 10년
            이상 부자로스터기의 다양한 모델을 안정적으로 공급하고 있으며, 오랜 기간 축적된 기술력과 신뢰성을
            바탕으로 리우컴퍼니는 고객에게 최적의 로스팅 솔루션을 제공합니다.
          </p>
        </div>
      </div>

      {/* quote band, styled after the hyundai.com pull-quote reference — same font as the rest of the site */}
      <div className="bg-canvas-soft py-20 sm:py-24">
        <div className="mx-auto max-w-[860px] px-6 text-center lg:px-8">
          <span className="text-[40px] leading-none font-[652] text-hairline sm:text-[44px]" aria-hidden="true">
            &ldquo;
          </span>

          <p className="mt-2 text-[15px] font-[652] leading-[1.5] text-ink sm:text-[18px]">
            체계적인 관리 시스템을 기반으로 한 서비스 경쟁력.
          </p>
          <p className="mt-4 text-[15px] font-[652] leading-[1.5] text-ink sm:text-[18px]">
            리우컴퍼니에서 공급한 제품 설비에 대한 사후관리가 완벽하게 이루어질 수 있도록
            <br />
            전국망의 서비스를 운영하고 있습니다.
            <br />
            영업 및 서비스망은 앞으로 꾸준히 확대될 것이며, 커피 시장을 선도하는 제품과 서비스를
            <br />
            제공하기 위해 더욱 성장해 나갈 것을 약속드립니다.
          </p>

          <span className="mt-2 block text-[40px] leading-none font-[652] text-hairline sm:text-[44px]" aria-hidden="true">
            &rdquo;
          </span>

          <p className="mt-4 text-[14px] font-[456] text-text-muted">리우컴퍼니</p>
        </div>
      </div>
    </div>
  )
}

export default About
