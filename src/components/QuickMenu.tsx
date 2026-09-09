const QUICK_LINKS = ['구매상담', '시현신청', '정비예약']

function QuickMenu() {
  return (
    <div className="w-full border-b border-hairline-soft bg-canvas-soft">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-3 px-6 py-8 sm:gap-4 lg:px-10">
        {QUICK_LINKS.map((label) => (
          <a
            key={label}
            href="#"
            className="rounded-sm border border-hairline bg-canvas px-6 py-3 text-[14px] font-[600] text-ink transition-colors hover:border-ink"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default QuickMenu
