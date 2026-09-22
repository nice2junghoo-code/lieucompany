import Header from '../components/Header'
import Footer from '../components/Footer'
import LocationsShowcase from '../components/LocationsShowcase'

function Showroom() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas font-display text-ink">
      <Header />

      <LocationsShowcase
        heading="BUJA ROASTER 전시장 쇼룸 운영"
        intro="리우컴퍼니는 부자로스터 전문 전시장 쇼룸을 통해 기존에 온라인 및 제품 카탈로그에 의존한 영업 방식이 아닌 소비자들이 부자로스터기 모델을 직접 사용 시연해 보고, 구매할 수 있도록 최적화된 부자로스터기 전시장 쇼룸을 운영하고 있습니다."
        sectionLabel="부자로스터 쇼룸 전시장"
        reservationNotice="전시장 쇼룸은 사전 예약제 입니다."
      />

      <Footer />
    </div>
  )
}

export default Showroom
