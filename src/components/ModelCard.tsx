import type { Model } from '../data/models'

function ModelCard({ model, fullWidth = false }: { model: Model; fullWidth?: boolean }) {
  const isGas = model.categories.includes('가스식로스터기')
  const isElectric = model.categories.includes('전기식로스터기')

  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className={`group flex ${fullWidth ? 'w-full max-w-[420px]' : 'w-[420px] shrink-0'} flex-col overflow-hidden rounded-2xl bg-canvas-soft px-4 py-7 shadow-sm transition-shadow hover:shadow-lg`}
    >
      <div className="flex items-center gap-2">
        <div className="flex flex-col">
          {model.name.split('\n').map((line, i) => (
            <p key={i} className={`whitespace-nowrap font-[652] text-ink ${model.nameTextClass ?? 'text-[22px]'}`}>
              {line}
            </p>
          ))}
        </div>
        {isElectric && (
          <span className="shrink-0 rounded-none bg-blue-900 px-1.5 py-1 text-[11px] font-[700] text-on-primary">ER</span>
        )}
        {isGas && (
          <span className="shrink-0 rounded-none bg-red-600 px-1.5 py-1 text-[11px] font-[700] text-on-primary">GR</span>
        )}
      </div>

      <div className="mt-6 flex h-[210px] items-end justify-center">
        <img
          src={model.image}
          alt={model.name}
          className={`block w-[55%] object-contain ${model.id === 'demtruck' ? 'mb-12' : ''}`}
          style={model.imageScale ? { transform: `scale(${model.imageScale})` } : undefined}
        />
      </div>

      <div className="mt-auto grid grid-cols-2 gap-1.5 pt-6">
        <div className="rounded-none border border-ink bg-canvas-soft px-2 py-2.5 text-center text-[12px] font-[600] text-ink transition-colors hover:bg-ink hover:text-on-primary">
          자세히보기
        </div>
        <div className="rounded-none border border-ink bg-canvas-soft px-2 py-2.5 text-center text-[12px] font-[600] text-ink transition-colors hover:bg-ink hover:text-on-primary">
          구매 상담 신청
        </div>
      </div>
    </a>
  )
}

export default ModelCard
