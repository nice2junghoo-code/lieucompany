import { useState } from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'
import namyangjuPhoto from '../assets/showroom-namyangju.png'
import gallery1 from '../assets/showroom-gallery/gallery-1.jpg'
import gallery2 from '../assets/showroom-gallery/gallery-2.jpg'
import gallery3 from '../assets/showroom-gallery/gallery-3.jpg'
import gallery4 from '../assets/showroom-gallery/gallery-4.jpg'
import gallery5 from '../assets/showroom-gallery/gallery-5.jpg'
import gallery6 from '../assets/showroom-gallery/gallery-6.jpg'
import gallery7 from '../assets/showroom-gallery/gallery-7.jpg'

const GALLERY_IMAGES = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7]

const LOCATIONS = [
  {
    id: 'namyangju',
    name: 'BUJA ROASTER 남양주 전시장',
    address: '경기도 남양주시 다산중앙로 19번길 21 블루웨일 1차 10층 1011호',
    phone: '010-7466-2744',
    hours: '평일 10:00 ~ 18:00\n토/일/공휴일 휴무',
    photo: namyangjuPhoto,
    dealerUrl: null,
  },
]

function PinIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path
        d="M10 18s6-5.09 6-9.5A6 6 0 1 0 4 8.5C4 12.91 10 18 10 18Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path
        d="M5 3.5h2.2l1 3-1.5 1.3a8 8 0 0 0 4.5 4.5l1.3-1.5 3 1V14a1.5 1.5 0 0 1-1.6 1.5A11.5 11.5 0 0 1 3.5 5.1 1.5 1.5 0 0 1 5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0" aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 6v4l2.6 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0" aria-hidden="true">
      <rect x="7.5" y="7.5" width="9" height="9" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M4.5 12.5v-8a1 1 0 0 1 1-1h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function CopiedIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="var(--color-ink)" stroke="var(--color-ink)" strokeWidth="1.4" />
      <path d="M6 10.3l2.6 2.6L14.5 7" stroke="var(--color-canvas)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path d="M10 4v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className={open ? 'hidden' : ''} />
      <path d="M4 10h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function Showroom() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const activeLocation = LOCATIONS.find((loc) => loc.id === activeId)

  const handleToggleCard = (id: string, isActive: boolean) => {
    setActiveId(isActive ? null : id)
  }

  const handleCopyAddress = (id: string, address: string) => {
    navigator.clipboard.writeText(address).catch(() => {})
    setCopiedId(id)
    setTimeout(() => setCopiedId((current) => (current === id ? null : current)), 1500)
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas font-display text-ink">
      <Header />

      <main className="px-6 py-16 lg:py-20">
        <h1 className="text-center text-[28px] font-[652] leading-[1.13] text-ink sm:text-[40px]">
          BUJA ROASTER 전시장 쇼룸 운영
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-center text-[17px] font-[456] leading-[1.7] text-text-muted">
          리우컴퍼니는 부자로스터 전문 전시장 쇼룸을 통해 기존에 온라인 및 제품 카탈로그에 의존한 영업 방식이 아닌
          소비자들이 부자로스터기 모델을 직접 사용 시연해 보고, 구매할 수 있도록 최적화된 부자로스터기 전시장
          쇼룸을 운영하고 있습니다.
        </p>

        {/* auto-scrolling gallery — full-bleed, right-to-left, seamless loop */}
        <div className="mx-[calc(50%-50vw)] mt-10 w-screen overflow-hidden">
          <div className="flex w-max animate-[marquee-left_36s_linear_infinite] gap-4">
            {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="h-[240px] w-[240px] shrink-0 rounded-none object-cover sm:h-[340px] sm:w-[340px]"
              />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1400px] grid-cols-1 gap-8 sm:grid-cols-[1fr_1fr] lg:grid-cols-[420px_1fr]">
          {/* self-contained cards — name + 지도 보기 toggle, contact rows; map shows inline on mobile, in the shared panel on the right at sm+ */}
          <div className="flex flex-col gap-4">
            <p className="text-[22px] font-[700] text-ink sm:text-[26px]">부자로스터 쇼룸 전시장</p>

            {LOCATIONS.map((loc) => {
              const isActive = activeId === loc.id
              const infoVisibilityClass = isActive ? 'flex' : 'hidden'

              return (
                <div
                  key={loc.id}
                  className={`rounded-2xl border p-5 transition-colors hover:border-ink ${isActive ? 'border-ink' : 'border-hairline'}`}
                >
                  <button
                    type="button"
                    onClick={() => handleToggleCard(loc.id, isActive)}
                    className="flex w-full items-center justify-between gap-3 text-left"
                  >
                    <p className="text-[17px] font-[700] text-ink">{loc.name}</p>
                    <span className="flex shrink-0 items-center gap-2">
                      {loc.address && (
                        <span className="flex items-center gap-1 text-[13px] font-[600] text-ink underline underline-offset-4 sm:hidden">
                          지도 보기
                          <PlusIcon open={isActive} />
                        </span>
                      )}
                      {isActive && <CopiedIcon />}
                    </span>
                  </button>

                  {loc.photo && (
                    <img
                      src={loc.photo}
                      alt={loc.name}
                      className={`mt-4 h-[180px] w-full object-cover ${isActive ? 'block' : 'hidden'}`}
                    />
                  )}

                  <div className={`mt-4 flex-col gap-3 border-t border-hairline-soft pt-4 ${infoVisibilityClass}`}>
                    {loc.phone && (
                      <a href={`tel:${loc.phone}`} className="flex items-center gap-2 text-[14px] text-text-muted">
                        <PhoneIcon />
                        {loc.phone}
                      </a>
                    )}

                    {loc.address ? (
                      <div className="flex items-center gap-2 text-[14px] text-text-muted">
                        <PinIcon />
                        <span className="flex-1">{loc.address}</span>
                        <button
                          type="button"
                          onClick={() => handleCopyAddress(loc.id, loc.address)}
                          aria-label="주소 복사"
                          className="flex shrink-0 items-center gap-1 text-ink"
                        >
                          {copiedId === loc.id ? <CopiedIcon /> : <CopyIcon />}
                        </button>
                      </div>
                    ) : (
                      <div className="text-[14px] text-text-muted">위치 정보 준비 중입니다</div>
                    )}

                    {loc.hours && (
                      <div className="flex items-start gap-2 text-[14px] text-text-muted">
                        <span className="mt-0.5">
                          <ClockIcon />
                        </span>
                        <div>
                          <span className="whitespace-pre-line">{loc.hours}</span>
                          <p className="mt-1 text-[13px] font-[700] text-red-600">전시장 쇼룸은 사전 예약제 입니다.</p>
                        </div>
                      </div>
                    )}

                    {loc.dealerUrl && (
                      <a
                        href={loc.dealerUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[13px] font-[600] text-ink underline underline-offset-4"
                      >
                        딜러 사이트 →
                      </a>
                    )}
                  </div>

                  {/* mobile only — desktop shows the map in the shared panel on the right instead */}
                  {isActive && loc.address && (
                    <iframe
                      title={loc.name}
                      src={`https://www.google.com/maps?q=${encodeURIComponent(loc.address)}&output=embed`}
                      className="mt-4 h-[280px] w-full border-0 sm:hidden"
                      loading="lazy"
                    />
                  )}
                </div>
              )
            })}

            <Link
              to="/service/demo"
              className="rounded-2xl border border-hairline p-5 transition-colors hover:border-ink"
            >
              <p className="text-[17px] font-[700] text-ink">시현 신청 하기 →</p>
            </Link>
          </div>

          {/* shared map panel — desktop/tablet only; shows all of Korea until a location is picked */}
          <div className="hidden bg-canvas-soft sm:block">
            {activeLocation?.address ? (
              <iframe
                title={activeLocation.name}
                src={`https://www.google.com/maps?q=${encodeURIComponent(activeLocation.address)}&output=embed`}
                className="h-full min-h-[520px] w-full border-0"
                loading="lazy"
              />
            ) : (
              <iframe
                title="대한민국 전체 지도"
                src="https://www.google.com/maps?q=대한민국&z=7&output=embed"
                className="h-full min-h-[520px] w-full border-0"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Showroom
