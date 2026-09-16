import { MODELS } from '../data/models'

const GROUPS = [
  { label: '홈 로스팅 및 샘플용 로스터기', ids: ['b30s'] },
  { label: '전기식 로스터기', ids: ['b80', 'b80c', 'b80s', 'b150', 'b150c', 'b150s', 'b500s'] },
  { label: '가스식 로스터기', ids: ['b180sg', 'b500sg', 'b15k-sg'] },
  { label: '대형 로스터기', ids: ['b500s', 'b500sg', 'b15k-sg'] },
  { label: '테이블', ids: ['buja-table'] },
  { label: '뎀트럭트롤리', ids: ['demtruck'] },
]

function ProductIndex() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
      <div className="flex flex-col gap-10">
        {GROUPS.map((group) => {
          const models = group.ids
            .map((id) => MODELS.find((m) => m.id === id))
            .filter((m): m is (typeof MODELS)[number] => Boolean(m))

          return (
            <div key={group.label}>
              <p className="border-b border-ink pb-3 text-left text-[18px] font-[652] text-ink sm:text-[20px]">
                {group.label}
              </p>

              <div className="mt-6 flex flex-wrap items-start gap-x-8 gap-y-6">
                {models.map((model) => (
                  <div key={model.id} className="flex w-[250px] flex-col items-start gap-2">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="h-[250px] w-full object-contain"
                      style={model.imageScale ? { transform: `scale(${model.imageScale})` } : undefined}
                    />
                    <p className="text-left text-[13px] font-[456] text-ink">{model.name.replace('\n', ' ')}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductIndex
