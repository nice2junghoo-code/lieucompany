import type { Model } from '../data/models'

function ModelCard({ model }: { model: Model }) {
  return (
    <a
      href="#"
      className="w-[240px] shrink-0 rounded-md border border-hairline-soft bg-canvas p-4 transition-colors hover:border-hairline"
    >
      <p className="text-[18px] font-[652] text-ink">{model.name}</p>

      <div className="mt-3 flex aspect-square items-center justify-center rounded-sm bg-canvas-soft p-6">
        <img src={model.image} alt={model.name} className="h-full w-full object-contain" />
      </div>

      <p className="mt-3 flex items-center gap-1 text-[13px] font-[456] text-text-muted">
        모델 그룹 보기 <span aria-hidden="true">∨</span>
      </p>
    </a>
  )
}

export default ModelCard
