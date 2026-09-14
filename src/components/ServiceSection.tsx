const SERVICES = [
  { key: 'center', label: '서비스 센터' },
  { key: 'reservation', label: '서비스 예약' },
]

function ServiceSection() {
  return (
    <section className="border-t border-hairline-soft bg-canvas px-6 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <a
            key={service.key}
            href="#"
            onClick={(e) => e.preventDefault()}
            className="group block rounded-md border border-hairline-soft bg-canvas p-4 transition-colors hover:border-hairline"
          >
            {/* placeholder — real photo to come later */}
            <div className="aspect-[16/9] w-full rounded-sm bg-field" />

            <p className="mt-4 text-center text-[18px] font-[652] text-ink">{service.label}</p>

            <div className="mt-3 rounded-sm border border-ink bg-canvas px-4 py-2.5 text-center text-[13px] font-[600] text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-on-primary">
              자세히보기
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default ServiceSection
