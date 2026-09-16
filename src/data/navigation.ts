export type NavChild = { label: string; to: string }
export type NavLink = { label: string; to: string; children?: NavChild[] }

// shared by Header (top nav + dropdowns) and Footer (link columns) — add a
// new top-level category or child link here and both update together
export const NAV_LINKS: NavLink[] = [
  { label: '모델', to: '/products' },
  {
    label: '구매',
    to: '/purchase',
    children: [
      { label: '시현 신청', to: '/purchase' },
      { label: '견적내기', to: '/purchase' },
      { label: '구매 상담 신청', to: '/purchase' },
    ],
  },
  { label: '전시장', to: '/showroom' },
  {
    label: '서비스',
    to: '/service',
    children: [
      { label: 'A/S 서비스', to: '/service' },
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
