import Header from '../components/Header'
import Footer from '../components/Footer'
import LocationsShowcase from '../components/LocationsShowcase'

function DemoRequest() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas font-display text-ink">
      <Header />

      <LocationsShowcase
        heading="부자로스터 시현 신청"
        intro="리우컴퍼니는 부자로스터 전문 전시장에서 직접 로스팅 시현을 보여드리고 있습니다. 온라인 카탈로그만으로는 확인하기 어려운 로스팅 성능과 사용감을 전시장 방문을 통해 직접 확인하고, 구매를 결정하실 수 있습니다."
        sectionLabel="부자로스터 시현 신청 매장"
        reservationNotice="시현은 사전 예약제로 진행됩니다."
      />

      <Footer />
    </div>
  )
}

export default DemoRequest
