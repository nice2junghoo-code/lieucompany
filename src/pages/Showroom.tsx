import Header from '../components/Header'

function Showroom() {
  return (
    <div className="min-h-screen bg-canvas font-display text-ink">
      <Header />

      <main className="px-6 py-16 lg:py-20">
        <h1 className="text-center text-[28px] font-[652] leading-[1.13] text-ink sm:text-[40px]">
          BUJA ROASTER 전시장 쇼룸 운영
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-center text-[15px] font-[456] leading-[1.7] text-text-muted sm:text-[16px]">
          리우컴퍼니는 부자로스터 전문 전시장 쇼룸을 통해 기존에 온라인 및 제품 카탈로그에 의존한 영업 방식이 아닌
          소비자들이 부자로스터기 모델을 직접 사용 시연해 보고, 구매할 수 있도록 최적화된 부자로스터기 전시장
          쇼룸을 운영하고 있습니다.
        </p>
      </main>
    </div>
  )
}

export default Showroom
