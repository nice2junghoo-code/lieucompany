import { useEffect, useState } from 'react'
import heroImageB30S from '../assets/hero-roaster.png'
import heroImageB80S from '../assets/hero-roaster-b80s.png'

const SLIDES = [
  {
    key: 'b30s',
    model: 'B30S',
    tagline: '스마트 기능이 탑재한 홈 로스팅 및 샘플용 로스터기',
    spec: '적정 투입량 100g~300g',
    image: heroImageB30S,
    alt: 'BUJA ROASTER B30S',
    aspectClass: 'aspect-[1005/877]',
    sizeClass: 'max-w-[260px] sm:max-w-md lg:max-w-xl',
  },
  {
    key: 'b80s',
    model: 'B80S',
    tagline: '초보자부터 전문가까지 수준 높은 로스팅 구현',
    spec: '적정 투입량 300g~800g(최대1kg)',
    image: heroImageB80S,
    alt: 'BUJA ROASTER B80S',
    aspectClass: 'aspect-[943/807]',
    sizeClass: 'max-w-[280px] sm:max-w-lg lg:max-w-2xl',
  },
]

// 5s per slide — in line with the rotation speed used on most large hero carousels (e.g. Hyundai's model banner)
const ROTATE_MS = 5000

function HeroCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), ROTATE_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-canvas">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {SLIDES.map((slide) => (
          <div key={slide.key} className="flex w-full shrink-0 flex-col">
            <div className="mx-auto w-full max-w-[1400px] px-6 pt-10 sm:pt-14 lg:px-10 lg:pt-16">
              <div className="max-w-md">
                <h1 className="text-[32px] font-[652] leading-[1.13] text-ink sm:text-[48px] lg:text-[64px] lg:leading-[1.0]">
                  <span className="lg:whitespace-nowrap">BUJA ROASTER</span>
                  <br />
                  {slide.model}
                </h1>

                <p className="mt-4 text-[16px] font-[600] leading-[1.38] text-ink sm:text-[18px]">{slide.tagline}</p>

                <div className="mt-4 inline-flex items-center rounded-sm border border-hairline bg-canvas px-3 py-1.5 text-[13px] font-[456] text-ink">
                  {slide.spec}
                </div>
              </div>
            </div>

            {/* flex-1 so this fills any leftover height when a taller slide stretches the row — keeps the bottom the gradient's soft tone instead of showing white */}
            <div className="flex w-full flex-1 items-center justify-center bg-gradient-to-b from-canvas via-canvas-soft to-canvas-soft">
              <div className={`relative mx-auto ${slide.aspectClass} w-full ${slide.sizeClass} px-6 pt-6 pb-10 sm:pt-0 sm:pb-14 lg:px-10 lg:pb-16`}>
                <img src={slide.image} alt={slide.alt} className="relative h-full w-full object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* dots */}
      <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.key}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`${slide.model} 보기`}
            className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-ink' : 'w-2 bg-hairline'}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel
