import Header from '../components/Header'
import Footer from '../components/Footer'
import LocationsShowcase from '../components/LocationsShowcase'

function DemoRequest() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas font-display text-ink">
      <Header />

      <LocationsShowcase
        heading="부자로스터 시현 신청"
        intro="리우컴퍼니 전시장에서는 부자로스터 제품을 직접 만나보고, 로스팅 시연까지 체험하실 수 있습니다."
        sectionLabel="부자로스터 시현 신청 매장"
        reservationNotice="시현은 사전 예약제로 진행됩니다."
      />

      <Footer />
    </div>
  )
}

export default DemoRequest
