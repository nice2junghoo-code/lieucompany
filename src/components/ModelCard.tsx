import type { Model } from '../data/models'

function ModelCard({ model }: { model: Model }) {
  return (
    <a
      href="#"
      className="w-[240px] shrink-0 rounded-md border border-hairline-soft bg-canvas p-4 transition-colors hover:border-hairline"
    >
      <div className="flex aspect-square items-center justify-center rounded-sm bg-canvas-soft p-6">
        <img src={model.image} alt={model.name} className="h-full w-full object-contain" />
      </div>
      <p className="mt-4 text-[12px] font-[600] text-text-muted">{model.category}</p>
      <p className="mt-0.5 text-[18px] font-[652] text-ink">{model.name}</p>
      <p className="mt-1 text-[13px] font-[456] leading-[1.43] text-text-muted">{model.tagline}</p>
    </a>
  )
}

export default ModelCard
