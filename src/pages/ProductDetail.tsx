import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { MODELS } from '../data/models'

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
            <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="flex h-[360px] items-center justify-center bg-canvas-soft lg:h-[460px]">
                <img
                  src={model.image}
                  alt={model.name}
                  className="h-[85%] w-[85%] object-contain"
                  style={model.imageScale ? { transform: `scale(${model.imageScale})` } : undefined}
                />
              </div>

              <div>
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

                <p className="mt-4 text-[16px] leading-[1.5] text-text-muted">{model.tagline}</p>

                {model.description && <p className="mt-4 text-[14px] leading-[1.6] text-text-muted">{model.description}</p>}

                {model.specs ? (
                  <div className="mt-8 grid grid-cols-1 gap-x-8 border-t border-hairline sm:grid-cols-2">
                    {model.specs.map((spec) => (
                      <div key={spec.label} className="flex justify-between border-b border-hairline py-3 text-[14px]">
                        <span className="text-text-muted">{spec.label}</span>
                        <span className="font-[600] text-ink">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-8 text-[13px] text-text-muted">상세 스펙 준비 중입니다.</p>
                )}

                {model.features && (
                  <ul className="mt-8 flex flex-col gap-2">
                    {model.features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-[14px] leading-[1.5] text-ink">
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
                        <span
                          key={color}
                          className="h-7 w-7 rounded-full border border-hairline"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                )}
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
