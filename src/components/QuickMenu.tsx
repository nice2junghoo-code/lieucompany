function QuickMenu() {
  return (
    <div className="w-full border-b border-hairline-soft bg-canvas-soft">
      <div className="mx-auto flex max-w-[1400px] flex-col items-stretch gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:px-10">
        <a
          href="#"
          className="rounded-sm border border-ink bg-ink px-6 py-3 text-center text-[14px] font-[600] text-on-primary transition-colors hover:bg-canvas hover:text-ink active:bg-canvas active:text-ink sm:w-auto"
        >
          구매상담
        </a>
        <a
          href="#"
          className="rounded-sm border border-hairline bg-canvas px-6 py-3 text-center text-[14px] font-[600] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-on-primary sm:w-auto"
        >
          시현신청
        </a>
      </div>
    </div>
  )
}

export default QuickMenu
