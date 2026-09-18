import Header from '../components/Header'
import ProductCatalog from '../components/ProductCatalog'
import HeroCarousel from '../components/HeroCarousel'
import ServiceSection from '../components/ServiceSection'
import CompanyIntro from '../components/CompanyIntro'
import LatestNews from '../components/LatestNews'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen bg-canvas font-display text-ink">
      <Header />

      <HeroCarousel />

      {/* product catalog — category filter + matching model cards */}
      <section className="bg-canvas-soft pt-8 pb-16 lg:pt-10 lg:pb-20">
        <ProductCatalog />
      </section>

      <CompanyIntro />

      <ServiceSection />

      <LatestNews />

      <Footer />
    </div>
  )
}

export default Home
