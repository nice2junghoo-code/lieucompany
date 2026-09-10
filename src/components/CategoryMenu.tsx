import { useState } from 'react'

const CATEGORIES = ['모든모델', '전기식로스터기', '가스식로스터기', '소형로스터기', '대형로스터기', '테이블', '뎀트럭트롤리']

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

const boxClass =
  'shrink-0 rounded-sm border border-hairline bg-canvas px-3 py-1.5 text-[12px] font-[600] whitespace-nowrap text-ink transition-colors hover:border-ink hover:bg-ink hover:text-on-primary'

function CategoryMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
      {/* desktop/tablet: full row, left-aligned */}
      <div className="hidden sm:flex sm:flex-wrap sm:items-start sm:justify-start sm:gap-x-2 sm:gap-y-3">
        {CATEGORIES.map((label) => (
          <div key={label} className="flex flex-col items-start gap-1">
            <a href="#" className={boxClass}>
              {label}
            </a>
            <span className="pl-0.5 text-[11px] font-[456] whitespace-nowrap text-text-muted">모델 그룹 보기</span>
          </div>
        ))}
      </div>

      {/* mobile: tap 모든모델 to reveal the rest below */}
      <div className="sm:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between rounded-sm border border-hairline bg-canvas px-4 py-2.5 text-[13px] font-[600] text-ink"
        >
          모든모델
          <ChevronIcon open={open} />
        </button>
        <p className="mt-1 pl-1 text-[11px] font-[456] text-text-muted">모델 그룹 보기</p>

        {open && (
          <div className="mt-2 flex flex-col gap-1 rounded-sm border border-hairline-soft bg-canvas-soft p-2">
            {CATEGORIES.slice(1).map((label) => (
              <a
                key={label}
                href="#"
                className="rounded-sm px-3 py-2.5 text-[13px] font-[600] text-ink transition-colors hover:bg-canvas"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryMenu
