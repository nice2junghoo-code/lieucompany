import type { Model } from '../data/models'

function ModelCard({ model }: { model: Model }) {
  const typeLabel = model.categories.includes('가스식로스터기') ? 'GR (Gas Type Roaster)' : 'ER (Electric Roaster)'

  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className="group w-[240px] shrink-0 rounded-md border border-hairline-soft bg-canvas p-4 transition-colors hover:border-hairline"
    >
      <div className="text-[10px] font-[700] text-ink">{typeLabel}</div>

      <div className="mt-1 flex aspect-square items-center justify-center rounded-sm bg-canvas p-3">
        <img src={model.image} alt={model.name} className="h-full w-full object-contain" />
      </div>

      <p className="text-center text-[18px] font-[652] text-ink">{model.name}</p>

      <div className="mt-3 rounded-sm border border-ink bg-canvas px-4 py-2.5 text-center text-[13px] font-[600] text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-on-primary">
        자세히보기
      </div>
    </a>
  )
}

export default ModelCard
