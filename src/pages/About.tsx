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
    </div>
  )
}

export default About
