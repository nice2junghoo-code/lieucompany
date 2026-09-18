import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { MODELS } from '../data/models'
import noticeBg from '../assets/product-detail-notice-bg.jpg'

function ProductDetail() {
  const { id } = useParams()
  const model = MODELS.find((m) => m.id === id)

  const isGas = model?.categories.includes('가스식로스터기')
  const isElectric = model?.categories.includes('전기식로스터기')

  return (
    <div className="min-h-screen bg-canvas font-display text-ink">
      <Header />

      <main className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <Link to="/products" className="text-[13px] font-[600] text-text-muted hover:text-ink">
            ← 모델 목록으로
          </Link>

          {!model && <p className="py-20 text-center text-[14px] text-text-muted">모델을 찾을 수 없습니다.</p>}

          {model && (
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

                {model.specGroups ? (
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
                    {model.specs.map((spec) => (
                      <div key={spec.label} className="flex gap-4 border-b border-hairline py-3 text-[14px]">
                        <span className="w-24 shrink-0 text-text-muted">{spec.label}</span>
                        <span className="font-[600] text-ink">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-8 text-[13px] text-text-muted lg:mt-auto">상세 스펙 준비 중입니다.</p>
                )}
              </div>

              {(model.features || model.colors) && (
                <div className="lg:order-4 lg:col-start-2">
                  {model.features && (
                    <ul className="flex flex-col gap-2">
                      {model.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-[14px] leading-[1.5] font-[600] text-ink">
                          <span className="text-red-600">▪</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {model.colors && (
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

              <div className="relative flex flex-col items-center justify-center overflow-hidden p-6 text-center lg:order-3 lg:col-start-1">
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

                <button
                  type="button"
                  className="relative mt-6 w-1/2 rounded-none border border-white bg-transparent px-2 py-2.5 text-center text-[12px] font-[600] text-white transition-colors hover:bg-white hover:text-ink"
                >
                  구매 상담 신청
                </button>
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
