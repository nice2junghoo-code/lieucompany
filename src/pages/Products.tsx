import Header from '../components/Header'
import CategoryMenu from '../components/CategoryMenu'
import ModelCard from '../components/ModelCard'
import { MODELS } from '../data/models'

function Products() {
  return (
    <div className="min-h-screen bg-canvas font-display text-ink">
      <Header />

      <main className="py-16 lg:py-20">
        <h1 className="px-6 text-center text-[28px] font-[652] leading-[1.13] text-ink sm:text-[40px]">제품</h1>

        <div className="mt-10">
          <CategoryMenu />
        </div>

        {/* model list — left-aligned row on desktop, swipeable on mobile */}
        <div className="mx-auto mt-10 max-w-[1400px] px-6 lg:px-10">
          <div className="flex gap-4 overflow-x-auto sm:flex-wrap sm:overflow-visible">
            {MODELS.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Products
