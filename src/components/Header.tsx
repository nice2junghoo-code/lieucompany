import { Link } from 'react-router-dom'
import logo from '../assets/lieu-logo.png'

const NAV_LINKS = [
  { label: 'PRODUCT', to: '/products' },
  {
    label: '브랜드',
    to: '/about',
    children: [{ label: '뉴스', to: '/news' }],
  },
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
            <div key={link.to} className="group relative">
              <Link to={link.to} className="text-[14px] font-[456] text-ink transition-colors hover:text-text-muted">
                {link.label}
              </Link>

              {link.children && (
                <div className="invisible absolute top-full left-1/2 z-10 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="min-w-[100px] rounded-sm border border-hairline-soft bg-canvas py-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block px-4 py-2 text-center text-[13px] font-[456] text-ink transition-colors hover:text-text-muted"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Header
