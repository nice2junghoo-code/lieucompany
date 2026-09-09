import Header from '../components/Header'
import aboutPhoto from '../assets/about-photo.jpg'

function About() {
  return (
    <div className="min-h-screen bg-canvas font-display text-ink">
      <Header />

      {/* large image up top, nothing else */}
      <img
        src={aboutPhoto}
        alt="lieucoffee roasters"
        className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[600px]"
      />

      {/* centered heading + one-line summary, typography matched to the main page */}
      <div className="mx-auto max-w-[1200px] px-6 py-16 text-center lg:px-8 lg:py-24">
        <h1 className="text-[28px] font-[652] leading-[1.13] text-ink sm:text-[40px] lg:text-[56px] lg:leading-[1.0]">
          ABOUT US
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[16px] font-[300] leading-[1.38] text-text-muted sm:text-[18px]">
          2014년부터 로스팅 솔루션을 제공합니다.
        </p>
      </div>
    </div>
  )
}

export default About
