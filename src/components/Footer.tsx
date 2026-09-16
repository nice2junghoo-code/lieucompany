import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../data/navigation'

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path d="M10 4v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className={open ? 'hidden' : ''} />
      <path d="M4 10h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function Footer() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <footer className="bg-ink-soft px-6 py-16 lg:px-10 lg:py-20">
      {/* mobile: full-width accordion rows, matching the header's mobile menu pattern */}
      <div className="sm:hidden">
        {NAV_LINKS.map((link) => {
          const isExpanded = expanded === link.label

          return (
            <div key={link.label} className="border-b border-white/10">
              {link.children ? (
                <button
                  type="button"
                  onClick={() => setExpanded(isExpanded ? null : link.label)}
                  className="flex w-full items-center justify-between py-5 text-left text-[16px] font-[700] text-on-primary"
                >
                  {link.label}
                  <PlusIcon open={isExpanded} />
                </button>
              ) : (
                <Link to={link.to} className="block py-5 text-[16px] font-[700] text-on-primary">
                  {link.label}
                </Link>
              )}

              {link.children && isExpanded && (
                <div className="flex flex-col gap-4 pb-5">
                  {link.children.map((child) => (
                    <Link key={child.label} to={child.to} className="text-[14px] font-[456] text-white/60">
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* tablet/desktop: columns, all links visible */}
      <div className="mx-auto hidden max-w-[1400px] sm:grid sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 lg:gap-x-16">
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
