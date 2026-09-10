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

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-10 w-10" aria-hidden="true">
      <path
        d={direction === 'left' ? 'M12 4.5 6 10l6 5.5' : 'M8 4.5 14 10l-6 5.5'}
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function HeroCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), ROTATE_MS)
    return () => clearInterval(id)
  }, [])

  const goPrev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)
  const goNext = () => setIndex((i) => (i + 1) % SLIDES.length)

  const prevSlide = SLIDES[(index - 1 + SLIDES.length) % SLIDES.length]
  const nextSlide = SLIDES[(index + 1) % SLIDES.length]

  return (
    <section className="relative w-full overflow-hidden bg-canvas">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {SLIDES.map((slide, i) => {
          const isActive = i === index
          return (
            <div key={slide.key} className="flex w-full shrink-0 flex-col">
              <div className="mx-auto w-full max-w-[1400px] px-6 pt-10 sm:pt-14 lg:px-10 lg:pt-16">
                {/* keyed on isActive so the entrance animation replays each time this slide becomes current */}
                <div key={`text-${isActive}`} className={`max-w-md ${isActive ? 'animate-[slide-in-right_0.7s_ease-out_both]' : ''}`}>
                  <h1 className="text-[32px] font-[652] leading-[1.13] text-ink sm:text-[48px] lg:text-[64px] lg:leading-[1.0]">
                    <span className="lg:whitespace-nowrap">BUJA ROASTER</span>
                    <br />
                    {slide.model}
                  </h1>

                  <p className="mt-4 text-[16px] font-[456] leading-[1.38] text-ink sm:text-[18px]">{slide.tagline}</p>

                  <div className="mt-4 inline-flex items-center rounded-sm border border-hairline bg-canvas px-3 py-1.5 text-[13px] font-[456] text-ink">
                    {slide.spec}
                  </div>
                </div>
              </div>

              {/* flex-1 so this fills any leftover height when a taller slide stretches the row — keeps the bottom the gradient's soft tone instead of showing white */}
              <div className="flex w-full flex-1 items-center justify-center bg-gradient-to-b from-canvas via-canvas-soft to-canvas-soft">
                <div className={`relative mx-auto ${slide.aspectClass} w-full ${slide.sizeClass} px-6 pt-6 pb-10 sm:pt-0 sm:pb-14 lg:px-10 lg:pb-16`}>
                  <img
                    key={`img-${isActive}`}
                    src={slide.image}
                    alt={slide.alt}
                    className={`relative h-full w-full object-contain ${isActive ? 'animate-[slide-in-right_0.7s_ease-out_0.25s_both]' : ''}`}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* prev/next arrows — desktop/tablet only, mobile stays swipe-free as before */}
      <button
        type="button"
        onClick={goPrev}
        aria-label={`${prevSlide.model} 보기`}
        className="absolute top-[63%] left-4 z-10 hidden -translate-y-1/2 items-center gap-2 text-ink transition-colors hover:text-text-muted sm:flex lg:left-8"
      >
        <ArrowIcon direction="left" />
        <span className="text-[16px] font-[456]">{prevSlide.model}</span>
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label={`${nextSlide.model} 보기`}
        className="absolute top-[63%] right-4 z-10 hidden -translate-y-1/2 items-center gap-2 text-ink transition-colors hover:text-text-muted sm:flex lg:right-8"
      >
        <span className="text-[16px] font-[456]">{nextSlide.model}</span>
        <ArrowIcon direction="right" />
      </button>

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
