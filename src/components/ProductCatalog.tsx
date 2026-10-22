import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MODELS } from '../data/models'
import ModelCard from './ModelCard'

const CATEGORIES = ['모든모델', '전기식로스터기', '가스식로스터기', '대형로스터기', '테이블', '뎀트럭트롤리']

// PC left-sidebar filters: options within a group are OR'd, groups are AND'd
const FUEL_FILTERS = [
  { label: '전기식', category: '전기식로스터기' },
  { label: '가스식', category: '가스식로스터기' },
]

const MODEL_FILTERS = [
  { label: 'B30S', ids: ['b30s'] },
  { label: 'B80', ids: ['b80', 'b80c', 'b80s'] },
  { label: 'B150', ids: ['b150', 'b150c', 'b150s'] },
  { label: 'B180SG', ids: ['b180sg'] },
  { label: 'B500S', ids: ['b500s'] },
  { label: 'B500SG', ids: ['b500sg'] },
  { label: 'B15K SG', ids: ['b15k-sg'] },
  { label: 'TABLE', ids: ['buja-table'] },
  { label: 'Demtruk', ids: ['demtruck'] },
]

const TYPE_FILTERS = [
  { label: '일반형', ids: ['b80', 'b150'] },
  { label: '쿨러장착형', ids: ['b80c', 'b150c'] },
  { label: '스마트', ids: ['b30s', 'b80s', 'b150s', 'b180sg', 'b500s', 'b500sg', 'b15k-sg'] },
]

// ?category= deep links (header menu) expressed as sidebar filters
const CATEGORY_TO_FILTERS: Record<string, { fuel?: string[]; model?: string[] }> = {
  전기식로스터기: { fuel: ['전기식'] },
  가스식로스터기: { fuel: ['가스식'] },
  대형로스터기: { model: ['B500S', 'B500SG', 'B15K SG'] },
  테이블: { model: ['TABLE'] },
  뎀트럭트롤리: { model: ['Demtruk'] },
}

function toggle(list: string[], value: string) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
}

function sidebarPillClass(active: boolean) {
  return `rounded-none border px-3 py-1.5 text-[13px] font-[600] transition-colors ${
    active ? 'border-ink bg-ink text-on-primary' : 'border-hairline bg-canvas text-ink hover:border-ink'
  }`
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia('(min-width: 1024px)').matches)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => setIsDesktop(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return isDesktop
}

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
  const [searchParams] = useSearchParams()
  const [selected, setSelected] = useState('모든모델')
  const [open, setOpen] = useState(false)
  const [fuel, setFuel] = useState<string[]>([])
  const [modelPick, setModelPick] = useState<string[]>([])
  const [typePick, setTypePick] = useState<string[]>([])
  const isDesktop = useIsDesktop()
  const rowRef = useRef<HTMLDivElement>(null)

  // header mega-menu / any external link can deep-link a category via ?category=
  useEffect(() => {
    const category = searchParams.get('category')
    if (category && CATEGORIES.includes(category)) {
      setSelected(category)
      const mapped = CATEGORY_TO_FILTERS[category]
      setFuel(mapped?.fuel ?? [])
      setModelPick(mapped?.model ?? [])
      setTypePick([])
    }
  }, [searchParams])

  const filtersActive = fuel.length + modelPick.length + typePick.length > 0

  const sidebarModels = MODELS.filter((m) => {
    const fuelOk = fuel.length === 0 || FUEL_FILTERS.some((f) => fuel.includes(f.label) && m.categories.includes(f.category))
    const modelOk = modelPick.length === 0 || MODEL_FILTERS.some((f) => modelPick.includes(f.label) && f.ids.includes(m.id))
    const typeOk = typePick.length === 0 || TYPE_FILTERS.some((f) => typePick.includes(f.label) && f.ids.includes(m.id))
    return fuelOk && modelOk && typeOk
  })

  const categoryModels = selected === '모든모델' ? MODELS : MODELS.filter((m) => m.categories.includes(selected))
  // lg+ uses the sidebar filters; below lg keeps the original category selector
  const models = layout === 'grid' && isDesktop ? sidebarModels : categoryModels

  const scrollRow = (direction: 1 | -1) => {
    rowRef.current?.scrollBy({ left: direction * rowRef.current.clientWidth * 0.9, behavior: 'smooth' })
  }

  const selectorBody = (
    <>
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
    </>
  )

  const categorySelector = <div className="mx-auto max-w-[1400px] px-6 lg:px-10">{selectorBody}</div>

  if (layout === 'grid') {
    return (
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-10">
          {/* left filter column (lg+) — click to toggle; options in a group are OR'd, groups are AND'd */}
          <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
            {[
              { title: '연료 타입', options: FUEL_FILTERS.map((f) => f.label), picked: fuel, set: setFuel },
              { title: '모델', options: MODEL_FILTERS.map((f) => f.label), picked: modelPick, set: setModelPick },
              { title: '모델 유형', options: TYPE_FILTERS.map((f) => f.label), picked: typePick, set: setTypePick },
            ].map((group) => (
              <div key={group.title} className="mb-8">
                <p className="text-[13px] font-[600] text-text-muted">{group.title}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.options.map((label) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => group.set((prev) => toggle(prev, label))}
                      className={sidebarPillClass(group.picked.includes(label))}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {filtersActive && (
              <button
                type="button"
                onClick={() => {
                  setFuel([])
                  setModelPick([])
                  setTypePick([])
                }}
                className="text-[13px] font-[600] text-ink underline underline-offset-4"
              >
                필터 초기화
              </button>
            )}
          </aside>

          <div>
            {/* below lg: the original category row / dropdown */}
            <div className="lg:hidden">{selectorBody}</div>

            <p className="mt-8 text-[14px] font-[600] text-ink lg:mt-0">
              {(isDesktop ? filtersActive : selected !== '모든모델')
                ? `조건에 맞는 모델 (${models.length})`
                : `전체 모델 (${models.length})`}
            </p>

            {models.length === 0 && (
              <p className="py-20 text-center text-[14px] text-text-muted">조건에 맞는 모델이 없습니다. 필터를 줄여보세요.</p>
            )}

            <div className="mt-4 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
              {models.map((model) => (
                <ModelCard key={model.id} model={model} fullWidth />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {categorySelector}

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
