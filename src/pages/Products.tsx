import Header from '../components/Header'
import ProductCatalog from '../components/ProductCatalog'
import Footer from '../components/Footer'

function Products() {
  return (
    <div className="min-h-screen bg-canvas font-display text-ink">
      <Header />

      <main className="py-16 lg:py-20">
        <h1 className="px-6 text-center text-[28px] font-[652] leading-[1.13] text-ink sm:text-[40px]">제품</h1>

        <div className="mt-10 bg-canvas-soft py-16">
          <ProductCatalog layout="grid" />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Products
