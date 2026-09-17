import { useEffect, useRef, useState } from 'react'
import heroImageB30S from '../assets/hero-b30s-new.jpg'
import heroImageB80S from '../assets/hero-roaster-b80s.png'

const SLIDES = [
  {
    key: 'b30s',
    model: 'B30S',
    tagline: '스마트 기능이 탑재한 홈 로스팅 및 샘플용 로스터기',
    image: heroImageB30S,
    alt: '부자로스터 B30S',
    fit: 'cover' as const,
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
    fit: 'contain' as const,
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
    // keep receiving move/up/cancel on this element even if the finger drifts outside it mid-swipe
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  // pointerup fires on a clean release; pointercancel fires when the browser hands the
  // gesture to native scrolling instead — treat both the same so a wobbly real-finger
  // swipe (not a lab-perfect straight line) still registers
  const handlePointerEnd = (e: React.PointerEvent) => {
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
      {/* full-bleed image strip — arrows/dots are scoped to this wrapper so they sit on the image, not the stats row below */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex touch-pan-y transition-transform duration-700 ease-out select-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
        >
          {SLIDES.map((slide, i) => {
            const isActive = i === index
            return (
              <div
                key={slide.key}
                className="relative h-[60vh] min-h-[420px] w-full shrink-0 overflow-hidden bg-canvas-soft sm:h-[75vh] lg:h-[calc(100vh-97px)]"
              >
                <img
                  key={`img-${isActive}`}
                  src={slide.image}
                  alt={slide.alt}
                  draggable={false}
                  className={`absolute inset-0 h-full w-full ${slide.fit === 'cover' ? 'object-cover' : 'object-contain'} ${
                    isActive ? 'animate-[slide-in-right_0.7s_ease-out_0.25s_both]' : ''
                  }`}
                />

                {/* bottom scrim so the white overlay text stays legible over any image */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 px-6 pb-10 sm:pb-14 lg:px-10 lg:pb-16">
                  {/* keyed on isActive so the entrance animation replays each time this slide becomes current */}
                  <div key={`text-${isActive}`} className={`mx-auto max-w-[1400px] ${isActive ? 'animate-[slide-in-right_0.7s_ease-out_both]' : ''}`}>
                    <h1 className="text-[32px] font-[652] leading-[1.13] text-white sm:text-[48px] lg:text-[64px] lg:leading-[1.0]">
                      부자로스터 {slide.model}
                    </h1>
                    <p className="mt-4 max-w-md text-[16px] font-[456] leading-[1.38] text-white/90 sm:text-[18px]">{slide.tagline}</p>
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
          className="absolute top-1/2 left-4 z-10 hidden -translate-y-1/2 items-center gap-2 rounded-full bg-black/30 py-2 pr-4 pl-2 text-white backdrop-blur-sm transition-colors hover:bg-black/50 sm:flex lg:left-8"
        >
          <ArrowIcon direction="left" />
          <span className="text-[16px] font-[456]">{prevSlide.model}</span>
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label={`${nextSlide.model} 보기`}
          className="absolute top-1/2 right-4 z-10 hidden -translate-y-1/2 items-center gap-2 rounded-full bg-black/30 py-2 pr-2 pl-4 text-white backdrop-blur-sm transition-colors hover:bg-black/50 sm:flex lg:right-8"
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
              className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-white' : 'w-2 bg-white/40'}`}
            />
          ))}
        </div>
      </div>

      {/* stats — a second row synced to the same index, scrolling beneath the image */}
      <div className="w-full overflow-hidden bg-canvas-soft">
        <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
          {SLIDES.map((slide) =>
            slide.stats ? (
              <div key={slide.key} className="w-full shrink-0 px-6 pt-8 pb-8 lg:px-10 lg:pt-10 lg:pb-10">
                <div className="mx-auto grid w-full max-w-[1400px] grid-cols-3 divide-x divide-hairline">
                  {slide.stats.map((stat) => (
                    <div key={stat.label} className="px-2 text-center">
                      <p className="text-[13px] font-[456] text-text-muted">{stat.label}</p>
                      <p className="mt-2 text-[18px] font-[700] text-ink sm:text-[22px]">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div key={slide.key} className="w-full shrink-0" />
            ),
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroCarousel
