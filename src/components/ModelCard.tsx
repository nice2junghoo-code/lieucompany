import { Link } from 'react-router-dom'
import type { Model } from '../data/models'

function ModelCard({ model, fullWidth = false }: { model: Model; fullWidth?: boolean }) {
  const isGas = model.categories.includes('가스식로스터기')
  const isElectric = model.categories.includes('전기식로스터기')

  return (
    <Link
      to={`/products/${model.id}`}
      className={`group flex ${fullWidth ? 'w-full max-w-[420px] rounded-none border border-transparent bg-canvas hover:border-ink' : 'w-[300px] shrink-0 rounded-none bg-canvas'} flex-col overflow-hidden px-4 py-7 shadow-sm transition-[box-shadow,border-color] hover:shadow-lg`}
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

      <div className={`${fullWidth ? 'mt-8 h-[250px]' : 'mt-4 h-[210px]'} flex items-end justify-center`}>
        <img
          src={model.image}
          alt={model.name}
          className={`block object-contain ${fullWidth ? 'w-[70%]' : 'w-[75%] transition-transform duration-500 group-hover:scale-110'} ${
            model.id === 'demtruck'
              ? fullWidth
                ? 'mb-7'
                : 'mb-12'
              : fullWidth
                ? 'mb-2'
                : ''
          }`}
          style={model.imageScale ? { transform: `scale(${model.imageScale})` } : undefined}
        />
      </div>

      <div className="mt-auto flex justify-center pt-6">
        <div className="w-1/2 rounded-none border border-ink bg-canvas px-2 py-2.5 text-center text-[12px] font-[600] text-ink transition-colors hover:bg-ink hover:text-on-primary">
          자세히보기
        </div>
      </div>
    </Link>
  )
}

export default ModelCard
