import { Fragment } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

const RESERVATION_STEPS: { label: string; desc: string; phone?: string }[] = [
  { label: '전화 연결', desc: '010-7466-2744', phone: '010-7466-2744' },
  { label: '시현 접수', desc: '모델 · 희망일자 · 시간 상담' },
  { label: '예약배정', desc: '희망일자 · 시간 배정' },
]

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

function ChevronsRightIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path d="M6 4.5 11 10l-5 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 4.5 15.5 10l-5 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function AsService() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas font-display text-ink">
      <Header />

      <main className="px-6 py-16 lg:py-20">
        {/* ARS reservation banner — full-bleed gray, centered */}
        <div className="mx-[calc(50%-50vw)] w-screen bg-canvas-soft px-6 py-16 text-center lg:py-20">
          <h2 className="text-[26px] font-[700] text-ink sm:text-[32px]">부자로스터 시현 신청 예약 안내(ARS)</h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.7] text-text-muted">
            전화 한통으로 고객님들께 맞춤형 서비스를 제공해드립니다.
            <br />
            부자로스터 시현은 사전 예약제로 진행됩니다.
          </p>
        </div>

        {/* reservation intro + procedure */}
        <div className="mx-auto mt-16 max-w-[1400px] lg:mt-20">
          <h2 className="text-[22px] font-[700] text-ink sm:text-[26px]">시현 신청 예약 소개</h2>
          <p className="mt-4 text-[17px] leading-[1.7] text-text-muted">
            예약을 받고 있습니다. 전화 한 통으로 고객님들에게 맞춤형 서비스를 제공해드립니다.
          </p>

          <h2 className="mt-14 text-[22px] font-[700] text-ink sm:text-[26px]">부자로스터기 로스팅 시현 예약 절차</h2>
          <div className="mt-6 rounded-none border border-hairline p-6 sm:p-8">
            <div className="flex flex-col gap-3">
              {RESERVATION_STEPS.map((step, i) => (
                <Fragment key={step.label}>
                  <div className="flex items-center gap-2 bg-canvas-soft px-5 py-4 sm:gap-4">
                    <span className="shrink-0 text-[15px] font-[700] text-ink sm:w-28">{step.label}</span>
                    <ChevronsRightIcon />
                    {step.phone ? (
                      <a href={`tel:${step.phone}`} className="flex items-center gap-1.5 text-[17px] text-text-muted">
                        {step.desc}
                        <PhoneIcon />
                      </a>
                    ) : (
                      <span className="text-[17px] text-text-muted">{step.desc}</span>
                    )}
                  </div>
                  {i < RESERVATION_STEPS.length - 1 && (
                    <div className="flex justify-center text-text-muted">
                      <ChevronDownIcon />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default AsService
