import { Link } from 'react-router-dom'
import logo from '../assets/lieu-logo.png'

const NAV_LINKS = [
  { label: 'PRODUCT', to: '/products' },
  { label: 'ABOUT', to: '/about' },
]

function Header() {
  return (
    <div className="sticky top-0 z-10 w-full border-b border-hairline-soft bg-canvas">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/">
          <img src={logo} alt="LIEU" className="h-16 w-auto" />
        </Link>

        <nav className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[14px] font-[456] text-ink transition-colors hover:text-text-muted"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Header
