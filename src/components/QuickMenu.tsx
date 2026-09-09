type IconProps = { className?: string }

function HeadsetIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4.5 14v-2a7.5 7.5 0 0 1 15 0v2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <rect x="3" y="14" width="4" height="6" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <rect x="17" y="14" width="4" height="6" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M19 20v.5a3 3 0 0 1-3 3h-2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function DemoIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5.5 9.5h11V15a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4V9.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M16.5 11h1.2a2 2 0 1 1 0 4h-1.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M9.3 6c0-.9.9-1 .9-1.9S9.3 3 9.3 2.1M13.7 6c0-.9.9-1 .9-1.9S13.7 3 13.7 2.1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WrenchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14.5 5.5a4 4 0 0 0-5.3 4.9L4 15.6l2.5 2.5 5.2-5.2a4 4 0 0 0 4.9-5.3l-2.6 2.6-2.1-2.1 2.6-2.6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M4.5 19.5h1.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function CatalogIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 3.5h8.5L18 7v13.5H6z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M14.5 3.5V7H18" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M12 12v6M9.3 15.3 12 18l2.7-2.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const QUICK_LINKS = [
  { label: '구매상담', Icon: HeadsetIcon },
  { label: '시현신청', Icon: DemoIcon },
  { label: '정비예약', Icon: WrenchIcon },
  { label: '카달로그·가격표', Icon: CatalogIcon },
]

function QuickMenu() {
  return (
    <div className="w-full border-b border-hairline-soft bg-canvas-soft">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-start justify-center gap-x-10 gap-y-6 px-6 py-8 sm:gap-x-14 lg:gap-x-20 lg:px-10">
        {QUICK_LINKS.map(({ label, Icon }) => (
          <a
            key={label}
            href="#"
            className="flex flex-col items-center gap-2 text-ink transition-colors hover:text-text-muted"
          >
            <Icon className="h-8 w-8" />
            <span className="text-[13px] font-[456] whitespace-nowrap">{label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default QuickMenu
