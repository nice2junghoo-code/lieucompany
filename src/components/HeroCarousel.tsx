import { useEffect, useRef, useState } from 'react'
import heroImageB30S from '../assets/hero-roaster.png'
import heroImageB80S from '../assets/hero-roaster-b80s.png'

const SLIDES = [
  {
    key: 'b30s',
    model: 'B30S',
    tagline: '스마트 기능이 탑재한 홈 로스팅 및 샘플용 로스터기',
    image: heroImageB30S,
    alt: '부자로스터 B30S',
    aspectClass: 'aspect-[1005/877]',
    sizeClass: 'max-w-[260px] sm:max-w-md lg:max-w-xl',
    stats: [
      { label: '투입량', value: '100g ~ 300G (최대350g)' },
      { label: '전압', value: 'Ac220V / 60Hz' },
      { label: '크기', value: '770 x 250 x 670mm' },
    ],
  },
  {
    key: 'b80s',
    model: 'B80S',
    tagline: '초보자부터 전문가까지 수준 높은 로스팅 구현',
    image: heroImageB80S,
    alt: '부자로스터 B80S',
    aspectClass: 'aspect-[943/807]',
    sizeClass: 'max-w-[280px] sm:max-w-lg lg:max-w-2xl',
    stats: [
      { label: '투입량', value: '300g ~ 800G (최대1kg)' },
      { label: '전압', value: 'Ac220V / 60Hz' },
      { label: '크기', value: '1000 x 320 x 810mm' },
    ],
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

  // swipe support for mobile (and mouse-drag) — pointer events cover touch, mouse, and pen in one handler
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null)

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerStartRef.current = { x: e.clientX, y: e.clientY }
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    const start = pointerStartRef.current
    pointerStartRef.current = null
    if (!start) return
    const dx = e.clientX - start.x
    const dy = e.clientY - start.y
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return
    if (dx < 0) goNext()
    else goPrev()
  }

  return (
    <section className="relative w-full overflow-hidden bg-canvas">
      <div
        className="flex touch-pan-y transition-transform duration-700 ease-out select-none"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {SLIDES.map((slide, i) => {
          const isActive = i === index
          return (
            <div key={slide.key} className="flex w-full shrink-0 flex-col">
              <div className="mx-auto w-full max-w-[1400px] px-6 pt-10 text-center sm:pt-14 lg:px-10 lg:pt-16">
                {/* keyed on isActive so the entrance animation replays each time this slide becomes current */}
                <div key={`text-${isActive}`} className={`mx-auto max-w-md ${isActive ? 'animate-[slide-in-right_0.7s_ease-out_both]' : ''}`}>
                  <h1 className="text-[32px] font-[652] leading-[1.13] text-ink sm:text-[48px] lg:text-[64px] lg:leading-[1.0]">
                    <span className="lg:whitespace-nowrap">
                      부자로스터 {slide.model}
                    </span>
                  </h1>

                  <p className="mt-4 text-[16px] font-[456] leading-[1.38] text-ink sm:text-[18px]">{slide.tagline}</p>
                </div>
              </div>

              {/* flex-1 column so this fills any leftover height when a taller slide stretches the row — the slack lands after the stats block instead of pushing image/stats apart */}
              <div className="flex w-full flex-1 flex-col bg-canvas-soft">
                <div className="flex w-full items-start justify-center bg-gradient-to-b from-canvas via-canvas-soft to-canvas-soft">
                  <div className={`relative mx-auto ${slide.aspectClass} w-full ${slide.sizeClass} px-6 pt-6 sm:pt-0 lg:px-10`}>
                    <img
                      key={`img-${isActive}`}
                      src={slide.image}
                      alt={slide.alt}
                      draggable={false}
                      className={`relative h-full w-full object-contain ${isActive ? 'animate-[slide-in-right_0.7s_ease-out_0.25s_both]' : ''}`}
                    />
                  </div>
                </div>

                {slide.stats && (
                  <div className="w-full px-6 pt-4 pb-8 lg:px-10 lg:pt-4 lg:pb-10">
                    <div className="mx-auto grid w-full max-w-[1400px] grid-cols-3 divide-x divide-hairline">
                      {slide.stats.map((stat) => (
                        <div key={stat.label} className="px-2 text-center">
                          <p className="text-[13px] font-[456] text-text-muted">{stat.label}</p>
                          <p className="mt-2 text-[18px] font-[700] text-ink sm:text-[22px]">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
        className="absolute top-[51%] left-4 z-10 hidden -translate-y-1/2 items-center gap-2 text-ink transition-colors hover:text-text-muted sm:flex lg:left-8"
      >
        <ArrowIcon direction="left" />
        <span className="text-[16px] font-[456]">{prevSlide.model}</span>
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label={`${nextSlide.model} 보기`}
        className="absolute top-[51%] right-4 z-10 hidden -translate-y-1/2 items-center gap-2 text-ink transition-colors hover:text-text-muted sm:flex lg:right-8"
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
