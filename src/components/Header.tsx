import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/lieu-logo.png'

const NAV_LINKS = [
  { label: 'PRODUCT', to: '/products' },
  {
    label: '서비스',
    to: '/service',
    children: [
      { label: '쇼룸 및 서비스 센터', to: '/service' },
      { label: 'A/S 서비스', to: '/service' },
      { label: '부자로스터 시현 신청', to: '/service' },
      { label: '이전 설치 및 시운전 지원', to: '/service' },
      { label: '오버홀', to: '/service' },
      { label: '로스터기 전문 덕트 배관 설비', to: '/service' },
    ],
  },
  {
    label: '브랜드',
    to: '/about',
    children: [
      { label: 'ABOUT US', to: '/about' },
      { label: '뉴스', to: '/news' },
    ],
  },
]

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      )}
    </svg>
  )
}

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path d="M10 4v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className={open ? 'hidden' : ''} />
      <path d="M4 10h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  const closeAll = () => {
    setOpen(false)
    setExpanded(null)
  }

  const hoveredLink = NAV_LINKS.find((link) => link.label === hovered)

  return (
    <div className="sticky top-0 z-10 w-full border-b border-hairline-soft bg-canvas" onMouseLeave={() => setHovered(null)}>
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" onClick={closeAll}>
          <img src={logo} alt="LIEU" className="h-16 w-auto" />
        </Link>

        {/* desktop/tablet nav — centered independent of the logo/menu-button widths on either side; mobile uses the hamburger menu below instead */}
        <nav className="hidden items-center gap-8 sm:absolute sm:left-1/2 sm:flex sm:-translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onMouseEnter={() => setHovered(link.children ? link.label : null)}
              className="text-[20px] font-[600] text-ink transition-colors hover:text-text-muted"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => (open ? closeAll() : setOpen(true))}
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          className="flex items-center justify-center text-ink sm:hidden"
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {/* desktop mega-menu — full-width bar below the nav row, sub-items centered, matching the BYD-style reference */}
      {hoveredLink?.children && (
        <div className="hidden border-t border-hairline-soft bg-canvas sm:block">
          <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 py-4 lg:px-10">
            {hoveredLink.children.map((child) => (
              <Link
                key={child.label}
                to={child.to}
                onClick={() => setHovered(null)}
                className="text-[15px] font-[600] text-ink transition-colors hover:text-text-muted"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* mobile menu — full-screen accordion list, closed rows expand with + / − */}
      {open && (
        <nav className="absolute inset-x-0 top-full z-20 max-h-[calc(100vh-97px)] overflow-y-auto bg-canvas px-6 py-2 sm:hidden">
          {NAV_LINKS.map((link) => {
            const isExpanded = expanded === link.label

            return (
              <div key={link.to} className="border-b border-hairline-soft">
                {link.children ? (
                  <button
                    type="button"
                    onClick={() => setExpanded(isExpanded ? null : link.label)}
                    className="flex w-full items-center justify-between py-4 text-left text-[17px] font-[600] text-ink"
                  >
                    {link.label}
                    <PlusIcon open={isExpanded} />
                  </button>
                ) : (
                  <Link to={link.to} onClick={closeAll} className="block py-4 text-[17px] font-[600] text-ink">
                    {link.label}
                  </Link>
                )}

                {link.children && isExpanded && (
                  <div className="flex flex-col pb-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        onClick={closeAll}
                        className="py-2 text-[15px] font-[456] text-text-muted"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      )}
    </div>
  )
}

export default Header
