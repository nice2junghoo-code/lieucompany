import type { Model } from '../data/models'

function ModelCard({ model }: { model: Model }) {
  const isGas = model.categories.includes('가스식로스터기')
  const isElectric = model.categories.includes('전기식로스터기')
  const typeLabel = model.badgeLabel ?? (isGas ? 'GR (Gas Type Roaster)' : isElectric ? 'ER (Electric Roaster)' : null)

  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className="group flex w-[280px] shrink-0 flex-col overflow-hidden rounded-none bg-canvas p-4 shadow-sm transition-shadow hover:shadow-lg"
    >
      <p className={`text-left whitespace-nowrap font-[652] text-ink ${model.nameTextClass ?? 'text-[18px]'}`}>{model.name}</p>
      {typeLabel && <div className="mt-0.5 text-left text-[12px] font-[700] text-ink">{typeLabel}</div>}

      <img
        src={model.image}
        alt={model.name}
        className="mx-auto mt-3 block w-[75%] object-contain transition-transform duration-500 group-hover:scale-110"
        style={model.imageScale ? { transform: `scale(${model.imageScale})` } : undefined}
      />

      <div className="mt-auto grid grid-cols-2 gap-1.5 pt-6">
        <div className="rounded-none border border-ink bg-canvas px-2 py-2.5 text-center text-[12px] font-[600] text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-on-primary">
          자세히보기
        </div>
        <div className="rounded-none border border-ink bg-canvas px-2 py-2.5 text-center text-[12px] font-[600] text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-on-primary">
          구매 상담 신청
        </div>
      </div>
    </a>
  )
}

export default ModelCard
