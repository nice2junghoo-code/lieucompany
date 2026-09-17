import Header from '../components/Header'
import ProductCatalog from '../components/ProductCatalog'
import Footer from '../components/Footer'

function Products() {
  return (
    <div className="min-h-screen bg-canvas-soft font-display text-ink">
      <Header />

      <main className="py-16 lg:py-20">
        <ProductCatalog layout="grid" />
      </main>

      <Footer />
    </div>
  )
}

export default Products
