import type { Model } from '../data/models'

function ElectricIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5 21 19.5H3L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M13 9.8h-2.3l-.9 3.3h1.9l-.7 2.6 3.3-4h-2l.7-1.9Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ModelCard({ model }: { model: Model }) {
  return (
    <a
      href="#"
      className="group w-[240px] shrink-0 rounded-md border border-hairline-soft bg-canvas p-4 transition-colors hover:border-hairline"
    >
      <div className="inline-flex items-center gap-1 rounded-sm border border-hairline px-2 py-1 text-[10px] font-[600] text-ink">
        <ElectricIcon className="h-[1em] w-[1em]" />
        ER (Electric Roaster)
      </div>

      <div className="mt-3 flex aspect-square items-center justify-center rounded-sm bg-canvas p-3">
        <img src={model.image} alt={model.name} className="h-full w-full object-contain" />
      </div>

      <p className="text-center text-[18px] font-[652] text-ink">{model.name}</p>

      <div className="mt-3 rounded-sm border border-ink bg-ink px-4 py-2.5 text-center text-[13px] font-[600] text-on-primary transition-colors group-hover:border-hairline group-hover:bg-canvas group-hover:text-ink">
        자세히보기
      </div>
    </a>
  )
}

export default ModelCard
