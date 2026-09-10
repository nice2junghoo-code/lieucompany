import Header from '../components/Header'
import QuickMenu from '../components/QuickMenu'
import ProductCatalog from '../components/ProductCatalog'
import HeroCarousel from '../components/HeroCarousel'

function Home() {
  return (
    <div className="min-h-screen bg-canvas font-display text-ink">
      <Header />

      <HeroCarousel />

      <QuickMenu />

      {/* product catalog — category filter + matching model cards */}
      <section className="bg-canvas pt-8 pb-16 lg:pt-10 lg:pb-20">
        <ProductCatalog />
      </section>
    </div>
  )
}

export default Home
