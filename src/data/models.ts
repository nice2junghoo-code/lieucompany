import b30sImage from '../assets/hero-roaster.png'
import b80Image from '../assets/model-b80.png'
import b80cImage from '../assets/model-b80c.png'
import b80sImage from '../assets/hero-roaster-b80s.png'
import b150Image from '../assets/model-b150.png'
import b150cImage from '../assets/model-b150c.png'
import b150sImage from '../assets/model-b150s.png'
import b180sgImage from '../assets/model-b180sg.png'
import b500sImage from '../assets/model-b500s.png'
import b500sgImage from '../assets/model-b500sg.png'
import b15kSgImage from '../assets/model-b15k-sg.png'
import bujaTableImage from '../assets/model-buja-table.png'
import demtruckImage from '../assets/model-demtruck.png'

export type Model = {
  id: string
  name: string
  tagline: string
  categories: string[]
  image: string
  // scales the product photo up within its card — use when the source photo
  // frames the machine smaller than the others (e.g. wider multi-part shots)
  imageScale?: number
  // overrides the auto ER/GR badge with custom text — for non-roaster products
  badgeLabel?: string
  // overrides the default 18px name size — for longer names that need to fit on one line
  nameTextClass?: string
  // detail-page spec table — filled in per model as the info comes in
  specs?: { label: string; value: string }[]
}

export const MODELS: Model[] = [
  {
    id: 'b30s',
    name: '부자로스터 B30S',
    tagline: '스마트 기능이 탑재한 홈 로스팅 및 샘플용 로스터기',
    categories: ['전기식로스터기'],
    image: b30sImage,
    specs: [
      { label: '투입량', value: '100g ~ 300G (최대350g)' },
      { label: '전압', value: 'Ac220V / 60Hz' },
      { label: '크기', value: '770 x 250 x 670mm' },
    ],
  },
  {
    id: 'b80',
    name: '부자로스터 B80',
    tagline: '초보자부터 전문가까지 수준 높은 로스팅 구현',
    categories: ['전기식로스터기'],
    image: b80Image,
  },
  {
    id: 'b80c',
    name: '부자로스터 B80C',
    tagline: '초보자부터 전문가까지 수준 높은 로스팅 구현',
    categories: ['전기식로스터기'],
    image: b80cImage,
  },
  {
    id: 'b80s',
    name: '부자로스터 B80S',
    tagline: '초보자부터 전문가까지 수준 높은 로스팅 구현',
    categories: ['전기식로스터기'],
    image: b80sImage,
    specs: [
      { label: '투입량', value: '300g ~ 800G (최대1kg)' },
      { label: '전압', value: 'Ac220V / 60Hz' },
      { label: '크기', value: '1000 x 320 x 810mm' },
    ],
  },
  {
    id: 'b150',
    name: '부자로스터 B150',
    tagline: '초보자부터 전문가까지 수준 높은 로스팅 구현',
    categories: ['전기식로스터기'],
    image: b150Image,
  },
  {
    id: 'b150c',
    name: '부자로스터 B150C',
    tagline: '초보자부터 전문가까지 수준 높은 로스팅 구현',
    categories: ['전기식로스터기'],
    image: b150cImage,
  },
  {
    id: 'b150s',
    name: '부자로스터 B150S',
    tagline: '초보자부터 전문가까지 수준 높은 로스팅 구현',
    categories: ['전기식로스터기'],
    image: b150sImage,
  },
  {
    id: 'b180sg',
    name: '부자로스터 B180SG',
    tagline: '초보자부터 전문가까지 수준 높은 로스팅 구현',
    categories: ['가스식로스터기'],
    image: b180sgImage,
  },
  {
    id: 'b500s',
    name: '부자로스터 B500S',
    tagline: '초보자부터 전문가까지 수준 높은 로스팅 구현',
    categories: ['전기식로스터기', '대형로스터기'],
    image: b500sImage,
  },
  {
    id: 'b500sg',
    name: '부자로스터 B500SG',
    tagline: '초보자부터 전문가까지 수준 높은 로스팅 구현',
    categories: ['가스식로스터기', '대형로스터기'],
    image: b500sgImage,
  },
  {
    id: 'b15k-sg',
    name: '부자로스터 B15K SG',
    tagline: '초보자부터 전문가까지 수준 높은 로스팅 구현',
    categories: ['가스식로스터기', '대형로스터기'],
    image: b15kSgImage,
    imageScale: 1.15,
  },
  {
    id: 'buja-table',
    name: '부자테이블',
    tagline: '이동이 편리한 바퀴형 로스터기 거치대',
    categories: ['테이블'],
    image: bujaTableImage,
    badgeLabel: 'BUJA TABLE',
  },
  {
    id: 'demtruck',
    name: '뎀트럭2.0 헤비듀티\n디럭스 키트',
    tagline: '높이 조절이 가능한 헤비듀티 로스터기 이동용 카트',
    categories: ['뎀트럭트롤리'],
    image: demtruckImage,
    badgeLabel: 'Dumtruk',
    imageScale: 1.3,
  },
]
