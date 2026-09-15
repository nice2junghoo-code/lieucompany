function CompanyIntro() {
  return (
    <section className="bg-ink px-6 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-[24px] font-[652] leading-[1.3] text-on-primary sm:text-[30px] lg:text-[34px]">
            부자로스터기 공식 판매 대리점 리우컴퍼니
          </h2>
          <p className="mt-4 text-[15px] font-[456] leading-[1.7] text-white/60 sm:text-[16px]">
            리우컴퍼니는 부자로스터 본사와 2015년 정식 판매 대리점 계약을 체결하고,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            현재까지 전국에 부자로스터기를 공식 유통하고 있습니다.
          </p>
        </div>

        {/* placeholder — real photo to come later */}
        <div className="aspect-[4/3] w-full rounded-md border border-white/15 bg-white/5" />
      </div>
    </section>
  )
}

export default CompanyIntro
