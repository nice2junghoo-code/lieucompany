import Header from '../components/Header'
import Footer from '../components/Footer'

function News() {
  return (
    <div className="min-h-screen bg-canvas font-display text-ink">
      <Header />

      <main className="py-16 lg:py-20">
        <h1 className="px-6 text-center text-[28px] font-[652] leading-[1.13] text-ink sm:text-[40px]">뉴스</h1>
        <p className="mt-4 px-6 text-center text-[15px] font-[456] text-text-muted sm:text-[17px]">LIEU의 최신 소식들을 알려드립니다.</p>
      </main>

      <Footer />
    </div>
  )
}

export default News
