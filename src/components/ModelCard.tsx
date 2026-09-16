import type { Model } from '../data/models'

function ModelCard({ model }: { model: Model }) {
  const isGas = model.categories.includes('가스식로스터기')
  const isElectric = model.categories.includes('전기식로스터기')
  const typeLabel = model.badgeLabel ?? (isGas ? 'GR (Gas Type Roaster)' : isElectric ? 'ER (Electric Roaster)' : null)

  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className="group w-[240px] shrink-0 rounded-none bg-canvas p-4 shadow-sm transition-shadow hover:shadow-lg"
    >
      {typeLabel && <div className="text-[10px] font-[700] text-ink">{typeLabel}</div>}

      <div className="mt-1 flex aspect-square items-center justify-center overflow-hidden">
        <img
          src={model.image}
          alt={model.name}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
          style={model.imageScale ? { transform: `scale(${model.imageScale})` } : undefined}
        />
      </div>

      <p className={`text-center whitespace-nowrap font-[652] text-ink ${model.nameTextClass ?? 'text-[15px]'}`}>{model.name}</p>

      <div className="mt-3 rounded-none border border-ink bg-canvas px-4 py-2.5 text-center text-[13px] font-[600] text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-on-primary">
        자세히보기
      </div>
    </a>
  )
}

export default ModelCard
