import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../data/navigation'

function Footer() {
  return (
    <footer className="bg-ink-soft px-6 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:gap-x-16">
        {NAV_LINKS.map((link) => (
          <div key={link.label}>
            <Link to={link.to} className="text-[15px] font-[700] text-on-primary">
              {link.label}
            </Link>

            <div className="mt-4 flex flex-col gap-3">
              {(link.children ?? []).map((child) => (
                <Link
                  key={child.label}
                  to={child.to}
                  className="text-[14px] font-[456] text-white/60 transition-colors hover:text-white"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer
