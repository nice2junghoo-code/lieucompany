import { useRef, useState } from 'react'
import { MODELS } from '../data/models'
import ModelCard from './ModelCard'

const CATEGORIES = ['모든모델', '전기식로스터기', '가스식로스터기', '대형로스터기', '테이블', '뎀트럭트롤리']

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`h-4 w-4 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path d="M5.5 8l4.5 4.5L14.5 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
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

function boxClass(active: boolean) {
  return `flex w-[132px] shrink-0 items-center justify-center rounded-none border px-2 py-2 text-center text-[12px] font-[600] whitespace-nowrap transition-colors ${
    active
      ? 'border-ink bg-ink text-on-primary'
      : 'border-hairline bg-canvas text-ink hover:border-ink hover:bg-ink hover:text-on-primary'
  }`
}

function ProductCatalog({ layout = 'scroll' }: { layout?: 'scroll' | 'grid' }) {
  const [selected, setSelected] = useState('모든모델')
  const [open, setOpen] = useState(false)
  const rowRef = useRef<HTMLDivElement>(null)

  const models = layout === 'grid' || selected === '모든모델' ? MODELS : MODELS.filter((m) => m.categories.includes(selected))

  const scrollRow = (direction: 1 | -1) => {
    rowRef.current?.scrollBy({ left: direction * rowRef.current.clientWidth * 0.9, behavior: 'smooth' })
  }

  if (layout === 'grid') {
    return (
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((model) => (
            <ModelCard key={model.id} model={model} fullWidth />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* desktop/tablet: full row, left-aligned */}
        <div className="hidden sm:flex sm:flex-wrap sm:items-center sm:justify-start sm:gap-2">
          {CATEGORIES.map((label) => (
            <button key={label} type="button" onClick={() => setSelected(label)} className={boxClass(selected === label)}>
              {label}
            </button>
          ))}
        </div>

        {/* mobile: tap to reveal the rest below */}
        <div className="sm:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-none border border-hairline bg-canvas px-4 py-2.5 text-[13px] font-[600] text-ink"
          >
            {selected}
            <ChevronIcon open={open} />
          </button>

          {open && (
            <div className="mt-2 flex flex-col gap-1 rounded-none border border-hairline-soft bg-canvas-soft p-2">
              {CATEGORIES.filter((label) => label !== selected).map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => {
                    setSelected(label)
                    setOpen(false)
                  }}
                  className="rounded-none px-3 py-2.5 text-left text-[13px] font-[600] text-ink transition-colors hover:bg-canvas"
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* model list — swipeable on mobile, arrow-scrollable on desktop/tablet */}
      <div className="mx-auto mt-8 max-w-[1400px] px-6 lg:mt-10 lg:px-10">
        <div ref={rowRef} className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth">
          {models.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>

        {models.length > 1 && (
          <div className="mt-8 hidden items-center justify-center gap-3 sm:flex lg:mt-10">
            <button
              type="button"
              onClick={() => scrollRow(-1)}
              aria-label="이전 모델 보기"
              className="flex h-9 w-12 items-center justify-center border border-ink bg-canvas text-ink transition-colors hover:bg-ink hover:text-on-primary"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={() => scrollRow(1)}
              aria-label="다음 모델 보기"
              className="flex h-9 w-12 items-center justify-center border border-ink bg-canvas text-ink transition-colors hover:bg-ink hover:text-on-primary"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCatalog
