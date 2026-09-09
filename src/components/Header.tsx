import { Link } from 'react-router-dom'
import logo from '../assets/lieu-logo.png'

function Header() {
  return (
    <div className="sticky top-4 z-10 flex justify-center px-4">
      <div className="flex items-center gap-6 rounded-full bg-canvas-soft py-2 pr-2 pl-5">
        <Link to="/">
          <img src={logo} alt="LIEU" className="h-5 w-auto" />
        </Link>
        <Link
          to="/about"
          className="inline-flex h-10 items-center rounded-full border border-transparent bg-primary px-4 text-[16px] font-[600] text-on-primary transition-all duration-150 hover:border-hairline hover:bg-canvas hover:text-ink active:scale-[0.97]"
        >
          ABOUT
        </Link>
      </div>
    </div>
  )
}

export default Header
