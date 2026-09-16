import type { Model } from '../data/models'

function ModelCard({ model }: { model: Model }) {
  const isGas = model.categories.includes('가스식로스터기')
  const isElectric = model.categories.includes('전기식로스터기')
  const typeLabel = model.badgeLabel ?? (isGas ? 'GR' : isElectric ? 'ER' : null)

  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className="group w-full shrink-0 snap-center rounded-md border border-hairline-soft bg-canvas p-4 transition-colors hover:border-hairline sm:w-[260px]"
    >
      <div className="flex flex-wrap items-center gap-1.5">
        <p className={`whitespace-nowrap font-[700] text-ink ${model.nameTextClass ?? 'text-[16px]'}`}>{model.name}</p>
        {typeLabel && (
          <span className="shrink-0 rounded-[4px] bg-ink px-1.5 py-0.5 text-[10px] font-[700] text-on-primary">{typeLabel}</span>
        )}
      </div>

      <p className="mt-1.5 text-[12px] leading-[1.4] text-text-muted">{model.tagline}</p>

      <div className="mt-3 flex aspect-square items-center justify-center overflow-hidden rounded-sm bg-canvas p-3">
        <img
          src={model.image}
          alt={model.name}
          className="h-full w-full object-contain"
          style={model.imageScale ? { transform: `scale(${model.imageScale})` } : undefined}
        />
      </div>

      <div className="mt-3 grid grid-cols-2 gap-1.5">
        <div className="rounded-sm border border-ink px-1 py-2.5 text-center text-[12px] font-[600] text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-on-primary">
          시현 신청
        </div>
        <div className="rounded-sm border border-ink px-1 py-2.5 text-center text-[12px] font-[600] text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-on-primary">
          구매 상담 신청
        </div>
      </div>
    </a>
  )
}

export default ModelCard
