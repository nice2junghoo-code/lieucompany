import { useState } from 'react'

import Header from '../components/Header'

const LOCATIONS = [
  { id: 'hq', name: 'BUJA ROASTER 본사', address: null },
  {
    id: 'namyangju',
    name: 'BUJA ROASTER 남양주 전시장',
    address: '다산중앙로 19번길 21 블루웨일 10층 1011호',
  },
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="currentColor" />
      <path d="M6 10.5l2.5 2.5L14.5 7" stroke="var(--color-canvas)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Showroom() {
  const [selected, setSelected] = useState(LOCATIONS[1].id)
  const selectedLocation = LOCATIONS.find((loc) => loc.id === selected)

  return (
    <div className="min-h-screen bg-canvas font-display text-ink">
      <Header />

      <main className="px-6 py-16 lg:py-20">
        <h1 className="text-center text-[28px] font-[652] leading-[1.13] text-ink sm:text-[40px]">
          BUJA ROASTER 전시장 쇼룸 운영
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-center text-[15px] font-[456] leading-[1.7] text-text-muted sm:text-[16px]">
          리우컴퍼니는 부자로스터 전문 전시장 쇼룸을 통해 기존에 온라인 및 제품 카탈로그에 의존한 영업 방식이 아닌
          소비자들이 부자로스터기 모델을 직접 사용 시연해 보고, 구매할 수 있도록 최적화된 부자로스터기 전시장
          쇼룸을 운영하고 있습니다.
        </p>

        {/* location list + map — BYD dealer-locator reference */}
        <div className="mx-auto mt-12 grid max-w-[1400px] grid-cols-1 gap-8 lg:grid-cols-[360px_1fr]">
          <div>
            <p className="text-[20px] font-[652] text-ink">부자로스터 쇼룸 전시장</p>

            <div className="mt-6 flex flex-col gap-3">
              {LOCATIONS.map((loc) => {
                const isSelected = selected === loc.id

                return (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => setSelected(loc.id)}
                    className={`flex items-center justify-between rounded-none border px-5 py-4 text-left text-[15px] font-[600] transition-colors ${
                      isSelected ? 'border-ink bg-canvas text-ink' : 'border-hairline bg-canvas text-ink hover:border-ink'
                    }`}
                  >
                    {loc.name}
                    {isSelected && <CheckIcon />}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="min-h-[360px] bg-canvas-soft lg:min-h-[520px]">
            {selectedLocation?.address ? (
              <iframe
                title={selectedLocation.name}
                src={`https://www.google.com/maps?q=${encodeURIComponent(selectedLocation.address)}&output=embed`}
                className="h-[360px] w-full border-0 lg:h-[520px]"
                loading="lazy"
              />
            ) : (
              <div className="flex h-[360px] items-center justify-center text-[14px] text-text-muted lg:h-[520px]">
                지도 위치 준비 중입니다
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Showroom
