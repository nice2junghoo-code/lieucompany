import serviceReservationImage from '../assets/service-reservation.png'
import serviceSmokeControlImage from '../assets/service-smoke-control.png'
import serviceDemoImage from '../assets/service-demo.png'
import serviceOverhaulImage from '../assets/service-overhaul.png'

const SERVICES = [
  { key: 'center', label: '서비스 센터', image: null },
  { key: 'reservation', label: 'A/S 서비스신청', image: serviceReservationImage },
  { key: 'demo', label: '부자로스터 시현신청', image: serviceDemoImage },
  { key: 'overhaul', label: '오버홀', image: serviceOverhaulImage },
  { key: 'smoke-control', label: '로스터기 전문 덕트 배관 설비', image: serviceSmokeControlImage },
]

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M7.5 4.5 13 10l-5.5 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ServiceSection() {
  return (
    <section className="bg-canvas px-6 pt-4 pb-16 lg:px-10 lg:pt-4 lg:pb-20">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <a
            key={service.key}
            href="#"
            onClick={(e) => e.preventDefault()}
            className="group relative block aspect-square w-full overflow-hidden rounded-md"
          >
            {service.image ? (
              <img
                src={service.image}
                alt={service.label}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              // placeholder — real photo to come later
              <div className="absolute inset-0 bg-field" />
            )}

            {/* bottom scrim so the white text stays legible over any photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-3 px-6 pb-8 text-center">
              <p className="text-[26px] font-[652] text-white sm:text-[28px]">{service.label}</p>
              <span className="inline-flex items-center gap-1 text-[13px] font-[600] text-white underline underline-offset-4">
                자세히 보기
                <ChevronRightIcon />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default ServiceSection
