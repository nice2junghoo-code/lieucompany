import Header from '../components/Header'
import ServiceSection from '../components/ServiceSection'

function Service() {
  return (
    <div className="min-h-screen bg-canvas font-display text-ink">
      <Header />

      <main className="py-16 lg:py-20">
        <h1 className="px-6 text-center text-[28px] font-[652] leading-[1.13] text-ink sm:text-[40px]">서비스</h1>

        <div className="mt-10">
          <ServiceSection />
        </div>
      </main>
    </div>
  )
}

export default Service
