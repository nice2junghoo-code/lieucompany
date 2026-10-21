import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { MODELS } from '../data/models'
import noticeBg from '../assets/product-detail-notice-bg.jpg'

// literal classes so Tailwind's scanner can find them (dynamic template strings won't compile)
const SPEC_ORDER_CLASS = [
  'sm:order-1',
  'sm:order-2',
  'sm:order-3',
  'sm:order-4',
  'sm:order-5',
  'sm:order-6',
  'sm:order-7',
  'sm:order-8',
  'sm:order-9',
  'sm:order-10',
  'sm:order-11',
  'sm:order-12',
]

function ProductDetail() {
  const { id } = useParams()
  const model = MODELS.find((m) => m.id === id)
  const [colorIndex, setColorIndex] = useState(0)
  useEffect(() => setColorIndex(0), [id])
  const activeColor = model?.colorOptions?.[colorIndex]

  // "공식 파트너" notice box: sits in the top grid by default, or full-width just above the Colors section (specShowcase.noticeBeforeColors)
  const renderNotice = (className: string, wide = false, showButtons = true) => (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden p-6 text-center ${wide ? 'min-h-[240px] sm:min-h-[300px] sm:p-10' : ''} ${className}`}
    >
      <img src={noticeBg} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/60" />

      <p className="relative text-[20px] font-[700] text-white">부자로스터 공식 파트너 리우컴퍼니</p>

      <p className="relative mt-3 text-[14px] leading-[1.7] font-[600] text-white">
        본 제품은 주문 제작 방식으로 진행됩니다.
        <br />
        계약금 납입일로부터 약 4~5주의 제작 기간이 소요됩니다.
        <br />
        지역 및 설치 환경에 따라 운반비 · 설치비가 별도로 발생할 수 있습니다.
        <br />
        용량, 가격, 설치 조건 등 자세한 사항은 구매 상담 신청 시 안내해 드립니다.
      </p>

      {/* wide variant: buttons sit side by side on PC (stacked on mobile); narrow variant keeps them stacked */}
      {showButtons && (
        <div className={wide ? 'relative mt-6 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center' : 'contents'}>
          <button
            type="button"
            className={`relative w-3/4 rounded-none border border-white bg-transparent px-2 py-2.5 text-center text-[15px] font-[700] text-white transition-colors hover:bg-white hover:text-ink ${wide ? 'sm:w-[240px]' : 'mt-6 sm:w-1/2'}`}
          >
            구매 상담 신청
          </button>

          <a
            href="https://www.instagram.com/lieu.company/"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative w-3/4 rounded-none border border-white bg-transparent px-2 py-2.5 text-center text-[15px] font-[700] text-white transition-colors hover:bg-white hover:text-ink ${wide ? 'sm:w-[240px]' : 'mt-3 sm:w-1/2'}`}
          >
            납품·설치 사례 더보기
          </a>
        </div>
      )}
    </div>
  )

  const isGas = model?.categories.includes('가스식로스터기')
  const isElectric = model?.categories.includes('전기식로스터기')
  const heroLayout = !!model?.specShowcase?.heroLayout
  const backLink = (
    <Link to="/products" className="text-[13px] font-[600] text-text-muted hover:text-ink">
      ← 모델 목록으로
    </Link>
  )

  return (
    <div className="min-h-screen bg-canvas font-display text-ink">
      <Header />

      <main className={heroLayout ? 'pt-6 pb-16 lg:pb-20' : 'py-16 lg:py-20'}>
        {/* home-page hero look (specShowcase.heroLayout): product on the light gradient, then left-aligned title + tagline + CTA buttons below it (Kia-style) */}
        {model && heroLayout && (
          <section>
            <div className="mx-auto max-w-[1100px] px-6 lg:px-10">{backLink}</div>

            <div className="mt-6 w-full bg-canvas-soft sm:mt-8">
              <div className="flex w-full items-start justify-center bg-gradient-to-b from-canvas via-canvas-soft to-canvas-soft">
                <div className="relative mx-auto aspect-[1005/877] w-full max-w-[260px] px-6 pt-6 sm:max-w-md sm:pt-0 lg:max-w-xl lg:px-10">
                  <img src={model.image} alt={model.name} draggable={false} className="h-full w-full object-contain" />
                </div>
              </div>

              <div className="mx-auto w-full max-w-[1100px] px-6 pt-8 pb-12 text-left lg:px-10 lg:pt-10 lg:pb-16">
                <div className="flex items-center gap-2 lg:gap-4">
                  <h1 className="text-[32px] font-[652] leading-[1.13] text-ink sm:text-[48px] lg:text-[64px] lg:leading-[1.0]">
                    {model.name}
                  </h1>
                  {/* PC: badge scaled up to sit beside the large title */}
                  {isElectric && (
                    <span className="shrink-0 rounded-none bg-blue-900 px-1.5 py-1 text-[11px] font-[700] text-on-primary lg:px-2.5 lg:py-1 lg:text-[32px] lg:leading-[1.0] lg:font-[700]">
                      ER
                    </span>
                  )}
                  {isGas && (
                    <span className="shrink-0 rounded-none bg-red-600 px-1.5 py-1 text-[11px] font-[700] text-on-primary lg:px-2.5 lg:py-1 lg:text-[32px] lg:leading-[1.0] lg:font-[700]">
                      GR
                    </span>
                  )}
                </div>
                <p className="mt-4 text-[16px] font-[456] leading-[1.38] text-ink sm:text-[18px]">
                  {model.specShowcase?.heroTagline ?? model.tagline}
                </p>

                {/* price on the left, CTA buttons beside it on PC (stacked below on mobile) */}
                <div className="mt-8 flex flex-col gap-8 lg:mt-10 lg:flex-row lg:items-center lg:gap-14">
                  {model.specShowcase?.heroPrice && (
                    <div>
                      <p className="flex items-baseline gap-2">
                        <span className="text-[32px] font-[652] leading-[1.13] text-ink sm:text-[40px]">
                          {model.specShowcase.heroPrice.amount}
                        </span>
                        {model.specShowcase.heroPrice.suffix && (
                          <span className="text-[14px] font-[600] text-ink sm:text-[16px]">{model.specShowcase.heroPrice.suffix}</span>
                        )}
                      </p>
                      {model.specShowcase.heroPrice.caption && (
                        <p className="mt-1 text-[14px] font-[456] text-text-muted">{model.specShowcase.heroPrice.caption}</p>
                      )}
                    </div>
                  )}

                  {model.specShowcase?.buttonsInMain && (
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <button
                        type="button"
                        className="rounded-none border border-ink bg-canvas px-2 py-2.5 text-center text-[15px] font-[700] text-ink transition-colors hover:bg-ink hover:text-on-primary sm:w-[240px]"
                      >
                        구매 상담 신청
                      </button>
                      <a
                        href="https://www.instagram.com/lieu.company/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-none border border-ink bg-canvas px-2 py-2.5 text-center text-[15px] font-[700] text-ink transition-colors hover:bg-ink hover:text-on-primary sm:w-[240px]"
                      >
                        납품·설치 사례 더보기
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          {!heroLayout && backLink}

          {!model && <p className="py-20 text-center text-[14px] text-text-muted">모델을 찾을 수 없습니다.</p>}

          {model && !heroLayout && (
            <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-6 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8">
              <div className="flex h-[360px] items-center justify-center bg-canvas lg:h-[460px]">
                <img
                  src={model.image}
                  alt={model.name}
                  className="h-[85%] w-[85%] object-contain"
                  style={model.imageScale ? { transform: `scale(${model.imageScale})` } : undefined}
                />
              </div>

              <div className="lg:flex lg:min-h-[460px] lg:flex-col">
                <div className="flex items-center gap-2">
                  {model.name.split('\n').map((line, i) => (
                    <h1 key={i} className="text-[28px] font-[652] leading-[1.13] text-ink sm:text-[36px]">
                      {line}
                    </h1>
                  ))}
                  {isElectric && (
                    <span className="shrink-0 rounded-none bg-blue-900 px-1.5 py-1 text-[11px] font-[700] text-on-primary">ER</span>
                  )}
                  {isGas && (
                    <span className="shrink-0 rounded-none bg-red-600 px-1.5 py-1 text-[11px] font-[700] text-on-primary">GR</span>
                  )}
                </div>

                <p className="mt-4 text-[14px] leading-[1.5] text-text-muted">{model.tagline}</p>

                {model.description && <p className="mt-4 text-[14px] leading-[1.6] text-text-muted">{model.description}</p>}

                {model.specShowcase?.hideTopSpecs ? null : model.specGroups ? (
                  <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
                    {model.specGroups.map((group) => (
                      <div key={group.heading} className="border-t border-hairline">
                        {group.rows.map((row) => (
                          <div key={row.label} className="flex gap-4 border-b border-hairline py-3 text-[14px]">
                            <span className="w-16 shrink-0 text-text-muted">{row.label}</span>
                            <span className="font-[600] text-ink">{row.value}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : model.specs ? (
                  <div className="mt-12 grid grid-cols-1 gap-x-8 border-t border-hairline sm:grid-cols-2">
                    {model.specs.map((spec, i) => (
                      <div
                        key={spec.label}
                        className={`flex gap-4 border-b border-hairline py-3 text-[14px] ${SPEC_ORDER_CLASS[(spec.order ?? i + 1) - 1] ?? ''}`}
                      >
                        <span className="w-24 shrink-0 text-text-muted">{spec.label}</span>
                        <span className="font-[600] text-ink">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-8 text-[13px] text-text-muted lg:mt-auto">상세 스펙 준비 중입니다.</p>
                )}

                {/* CTA buttons moved out of the 공식 파트너 box: bottom of the right column, stacked (specShowcase.buttonsInMain) */}
                {model.specShowcase?.buttonsInMain && (
                  <div className="mt-8 flex flex-col gap-3 sm:w-[260px] lg:mt-auto">
                    <button
                      type="button"
                      className="rounded-none border border-ink bg-canvas px-2 py-2.5 text-center text-[15px] font-[700] text-ink transition-colors hover:bg-ink hover:text-on-primary"
                    >
                      구매 상담 신청
                    </button>
                    <a
                      href="https://www.instagram.com/lieu.company/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-none border border-ink bg-canvas px-2 py-2.5 text-center text-[15px] font-[700] text-ink transition-colors hover:bg-ink hover:text-on-primary"
                    >
                      납품·설치 사례 더보기
                    </a>
                  </div>
                )}
              </div>

              {((model.features && !model.specShowcase?.featuresBelow) || (model.colors && !model.colorOptions)) && (
                <div className="lg:order-4 lg:col-start-2">
                  {model.features && !model.specShowcase?.featuresBelow && (
                    <ul className="flex flex-col gap-2">
                      {model.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-[14px] leading-[1.5] font-[600] text-ink">
                          <span className="text-red-600">▪</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {model.colors && !model.colorOptions && (
                    <div className="mt-8">
                      <p className="text-[13px] font-[600] text-text-muted">색상</p>
                      <div className="mt-3 flex gap-2">
                        {model.colors.map((color) => (
                          <span key={color} className="h-7 w-7 rounded-full border border-hairline" style={{ backgroundColor: color }} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {!model.specShowcase?.noticeBeforeColors && renderNotice('lg:order-3 lg:col-start-1')}
            </div>
          )}

          {model?.specShowcase?.noticeBeforeColors && <div className="mt-16 lg:mt-20">{renderNotice('', true, !model.specShowcase.buttonsInMain)}</div>}

          {model?.colorOptions && activeColor && (
            <div className="mt-16 lg:mt-20">
              <h2 className="text-[28px] font-[652] leading-[1.13] text-ink sm:text-[36px]">Colors</h2>

              <div className="mt-6 flex h-[320px] items-center justify-center overflow-hidden bg-canvas sm:h-[420px] lg:h-[520px]">
                {activeColor.image ? (
                  <img
                    src={activeColor.image}
                    alt={`${model.name} ${activeColor.name}`}
                    className="h-[92%] w-[92%] max-w-none scale-125 object-contain"
                  />
                ) : (
                  <p className="text-[14px] text-text-muted">{activeColor.name} 이미지 준비 중입니다.</p>
                )}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
                {model.colorOptions.map((option, i) => {
                  const active = i === colorIndex
                  return (
                    <button
                      key={option.name}
                      type="button"
                      onClick={() => setColorIndex(i)}
                      aria-pressed={active}
                      className="text-left"
                    >
                      <div
                        className={`relative h-8 rounded-none border transition-colors sm:h-10 ${active ? 'border-ink' : 'border-hairline hover:border-ink'}`}
                        style={{ backgroundColor: option.hex }}
                      >
                        {active && (
                          <span className="absolute top-1/2 right-2 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-on-primary sm:h-5 sm:w-5">
                            <svg viewBox="0 0 20 20" fill="none" className="h-2.5 w-2.5 sm:h-3 sm:w-3" aria-hidden="true">
                              <path d="M5 10.5l3.2 3.2L15 6.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                        )}
                      </div>
                      <p className="mt-3 text-[14px] font-[600] text-ink sm:text-[16px]">{option.name}</p>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {model?.specShowcase && model.specs && (
            <div className="mt-16 lg:mt-20">
              <div className="bg-canvas-soft px-6 pt-14 pb-24 text-center lg:pt-20">
                <h2 className="text-[28px] font-[652] leading-[1.13] text-ink sm:text-[36px]">제원</h2>

                {/* product photo with dimension brackets: height on the left, width underneath */}
                <div className="mt-10 flex justify-center">
                  <div className="relative ml-10">
                    <img src={model.image} alt={model.name} className="h-[200px] w-auto sm:h-[280px] lg:h-[340px]" />

                    <div className="absolute top-0 bottom-0 -left-5 w-3 border-y border-l border-ink/50" />
                    <span
                      className="absolute top-1/2 -left-12 -translate-y-1/2 text-[13px] font-[600] text-ink"
                      style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
                    >
                      {model.specShowcase.height}
                    </span>

                    <div className="absolute inset-x-0 -bottom-6 h-3 border-x border-b border-ink/50" />
                    <span className="absolute inset-x-0 -bottom-12 text-center text-[13px] font-[600] text-ink">
                      {model.specShowcase.width}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-14">
                <div className="border-b border-ink pb-3">
                  <h3 className="text-[20px] font-[652] text-ink">제원표</h3>
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-10">
                  {model.specs.map((spec) => (
                    <div key={spec.label} className="border-b border-hairline py-4">
                      <dt className="text-[13px] text-text-muted">{spec.label}</dt>
                      <dd className="mt-1 text-[16px] font-[700] text-ink">{spec.value}</dd>
                    </div>
                  ))}
                </dl>

                {model.specShowcase.featuresBelow && model.features && (
                  <div className="mt-14">
                    <div className="border-b border-ink pb-3">
                      <h3 className="text-[20px] font-[652] text-ink">주요 기능</h3>
                    </div>

                    <ul className="mt-5 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
                      {model.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-[15px] leading-[1.5] font-[600] text-ink">
                          <span className="text-red-600">▪</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {model?.detailGallery && (
            <div className="mt-16 lg:mt-20">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {model.detailGallery.map((item) => (
                  <div key={item.title}>
                    <div className="aspect-square w-full overflow-hidden bg-canvas-soft">
                      {item.image ? (
                        <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-[13px] text-text-muted">
                          이미지 준비 중
                        </div>
                      )}
                    </div>
                    <p className="mt-4 text-[16px] font-[700] text-ink">{item.title}</p>
                    {item.subtitle && <p className="mt-1 text-[13px] font-[600] text-text-muted">{item.subtitle}</p>}
                    <p className="mt-2 text-[13px] leading-[1.6] text-text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ProductDetail
