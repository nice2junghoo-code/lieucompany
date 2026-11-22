// 안전 사용 안내: shown at the bottom of every roaster model page (not on the table / Demtruk pages)
const CONTACT_TEL = '010-7466-2744'

const ROWS: { label: string; text: string }[] = [
  {
    label: '안전 사용 수칙',
    text: '가연물 근처 설치 금지, 로스팅 중 자리 비우지 않기, 채프(껍질) 청소 주기 준수, 배기 덕트 점검',
  },
  {
    label: '제외 범위',
    text: '안전 수칙 미준수, 임의 개조나 분해, 규격 외 전원이나 가스 사용, 점검 및 청소 불이행으로 생긴 손상과 사고는 무상 A/S 및 보증 대상에서 제외됩니다.',
  },
]

function SafetyNotice() {
  return (
    <div className="mt-16 lg:mt-20">
      <h2 className="text-[22px] font-[700] text-ink sm:text-[26px]">안전 사용 안내</h2>

      <div className="mt-6 border-t border-ink">
        {ROWS.map((row) => (
          <div key={row.label} className="grid grid-cols-1 gap-1 border-b border-hairline py-4 sm:grid-cols-[160px_1fr] sm:gap-6">
            <p className="text-[15px] font-[700] text-ink">{row.label}</p>
            <p className="text-[14px] leading-[1.7] text-text-muted">{row.text}</p>
          </div>
        ))}

        <div className="grid grid-cols-1 gap-1 border-b border-hairline py-4 sm:grid-cols-[160px_1fr] sm:gap-6">
          <p className="text-[15px] font-[700] text-ink">연락 안내</p>
          <p className="text-[14px] leading-[1.7] text-text-muted">
            이상이 있으면 즉시 사용을 중단하고 연락해 주세요.{' '}
            <a href={`tel:${CONTACT_TEL}`} className="font-[600] text-ink underline underline-offset-2">
              {CONTACT_TEL}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SafetyNotice
