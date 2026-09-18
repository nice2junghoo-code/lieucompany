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
  // longer detail-page paragraph shown below the tagline — filled in per model
  description?: string
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
  // detail-page bullet list of feature highlights
  features?: string[]
  // detail-page color swatches (hex)
  colors?: string[]
}

export const MODELS: Model[] = [
  {
    id: 'b30s',
    name: '부자로스터 B30S',
    tagline: '부자로스터 B30S은 스마트 기능이 기본 탑재된 홈 로스팅 및 샘플용 로스터기 모델입니다.',
    categories: ['전기식로스터기'],
    image: b30sImage,
    specs: [
      { label: '투입량', value: '100g ~ 300g (최대 350g)' },
      { label: '드럼 두께', value: '3T' },
      { label: '전압', value: 'Ac220V / 60Hz' },
      { label: '열원', value: '코일히터' },
      { label: '소비전력', value: '2.0kw' },
      { label: '드럼 재질', value: '국산 SUS 304' },
      { label: '제조국', value: 'Made in Korea' },
      { label: '크기', value: '770 x 250 x 670mm' },
      { label: '로스팅 방식', value: '반열풍식 (전도열의 비율이 높음)' },
      { label: '무게', value: '약 45kg' },
    ],
    features: [
      '스마트폰 블루투스 연동',
      '로스팅 종료 후 자동 배출',
      '로스팅 후 자동 배출 및 자동 쿨링',
      '10단 댐퍼 조정 가능 (기본 개방상태 권장)',
      '열량 제어 모드를 통해 직접 화력 설정 가능',
      '수동 전환을 통해 아날로그 수동 방식 로스팅 가능',
      '파이어스코프 및 아티산 연동 가능',
    ],
    colors: ['#111111', '#ffffff', '#dc2626'],
  },
  {
    id: 'b80',
    name: '부자로스터 B80',
    tagline:
      '부자 로스터 B80 모델은 기본형 · 쿨러 장착형 · 스마트 자동화형의 3가지 타입으로 구성되어 있으며 카페 및 소규모 로스팅 환경에 적합한 설계로 초보자부터 전문가까지 모두 수준 높은 로스팅을 구현할 수 있도록 제작되었습니다.',
    categories: ['전기식로스터기'],
    image: b80Image,
    specs: [
      { label: '투입량', value: '300g ~ 800g (최대 1kg)' },
      { label: '열원', value: '코일 히터' },
      { label: '전압', value: 'AC220V / 60Hz' },
      { label: '드럼 재질', value: '국산 SUS 304' },
      { label: '제조국', value: 'Made in Korea' },
      { label: '크기', value: '1000 x 320 x 810mm' },
      { label: '로스팅 방식', value: '반열풍식 (전도열의 비율이 높음)' },
      { label: '무게', value: '약 75kg' },
      { label: '드럼 두께', value: '3T' },
    ],
    features: [
      '시간당 3.2kg 생산가능',
      '파이어스코프 및 아티산 연동',
      '10단 댐퍼 조정 가능 (기본 개방상태 추천)',
      '로스팅 후 자동 배출 및 자동 쿨링',
      '모듈형 서랍식 히터 방식',
      '모듈형 쿨러',
      '교반 쿨러 장착 (옵션)',
      '모듈형 서랍식 특허등록 (제10-1971999호)',
    ],
    colors: ['#111111', '#ffffff', '#dc2626'],
  },
  {
    id: 'b80c',
    name: '부자로스터 B80C',
    tagline:
      '부자 로스터 B80 모델은 기본형 · 쿨러 장착형 · 스마트 자동화형의 3가지 타입으로 구성되어 있으며 카페 및 소규모 로스팅 환경에 적합한 설계로 초보자부터 전문가까지 모두 수준 높은 로스팅을 구현할 수 있도록 제작되었습니다.',
    categories: ['전기식로스터기'],
    image: b80cImage,
    specs: [
      { label: '투입량', value: '300g ~ 800g (최대 1kg)' },
      { label: '열원', value: '코일 히터' },
      { label: '전압', value: 'AC220V / 60Hz' },
      { label: '드럼 재질', value: '국산 SUS 304' },
      { label: '제조국', value: 'Made in Korea' },
      { label: '크기', value: '1000 x 320 x 810mm' },
      { label: '로스팅 방식', value: '반열풍식 (전도열의 비율이 높음)' },
      { label: '무게', value: '약 75kg' },
      { label: '드럼 두께', value: '3T' },
    ],
    features: [
      '시간당 3.2kg 생산가능',
      '파이어스코프 및 아티산 연동',
      '10단 댐퍼 조정 가능 (기본 개방상태 추천)',
      '로스팅 후 자동 배출 및 자동 쿨링',
      '모듈형 서랍식 히터 방식',
      '모듈형 쿨러',
      '교반 쿨러 장착 (옵션)',
      '모듈형 서랍식 특허등록 (제10-1971999호)',
    ],
    colors: ['#111111', '#ffffff', '#dc2626'],
  },
  {
    id: 'b80s',
    name: '부자로스터 B80S',
    tagline:
      '부자 로스터 B80 모델은 기본형 · 쿨러 장착형 · 스마트 자동화형의 3가지 타입으로 구성되어 있으며 카페 및 소규모 로스팅 환경에 적합한 설계로 초보자부터 전문가까지 모두 수준 높은 로스팅을 구현할 수 있도록 제작되었습니다.',
    categories: ['전기식로스터기'],
    image: b80sImage,
    specs: [
      { label: '투입량', value: '300g ~ 800g (최대 1kg)' },
      { label: '열원', value: '코일 히터' },
      { label: '전압', value: 'AC220V / 60Hz' },
      { label: '드럼 재질', value: '국산 SUS 304' },
      { label: '제조국', value: 'Made in Korea' },
      { label: '크기', value: '1000 x 320 x 810mm' },
      { label: '로스팅 방식', value: '반열풍식 (전도열의 비율이 높음)' },
      { label: '무게', value: '약 75kg' },
      { label: '드럼 두께', value: '3T' },
    ],
    features: [
      '시간당 3.2kg 생산가능',
      '파이어스코프 및 아티산 연동',
      '10단 댐퍼 조정 가능 (기본 개방상태 추천)',
      '로스팅 후 자동 배출 및 자동 쿨링',
      '모듈형 서랍식 히터 방식',
      '모듈형 쿨러',
      '교반 쿨러 장착 (옵션)',
      '모듈형 서랍식 특허등록 (제10-1971999호)',
      '[B80S 스마트 자동화형] 스마트폰 블루투스 연동',
      '[B80S 스마트 자동화형] 프로파일 저장 (스마트패드)',
      '[B80S 스마트 자동화형] 수동전환을 통해 아날로그 수동 방식 로스팅 가능',
      '[B80S 스마트 자동화형] 파이어스코프 및 아티산 연동 가능',
    ],
    colors: ['#111111', '#ffffff', '#dc2626'],
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
    tagline:
      '부자 로스터 B180 모델은 가스식 스마트 자동화형 로스터기로, 정밀한 화력 제어와 실시간 로스팅 데이터 관리가 가능합니다. 카페 및 소규모 로스팅 환경은 물론, 소량 납품에도 적합한 성능을 갖추고 있어 초보자부터 전문가까지 안정적이고 효율적인 로스팅을 구현할 수 있도록 설계되었습니다.',
    categories: ['가스식로스터기'],
    image: b180sgImage,
    specs: [
      { label: '투입량', value: '300g ~ 1.8kg (최대 2kg)' },
      { label: '드럼 두께', value: '6T' },
      { label: '전압', value: 'AC220V / 60Hz' },
      { label: '열원', value: '메탈화이버 버너' },
      { label: '소비전력', value: '200W' },
      { label: '드럼 재질', value: '국산 SUS 304 6T 단드럼' },
      { label: '제조국', value: 'Made in Korea' },
      { label: '크기', value: '1200 x 450 x 960mm' },
      { label: '로스팅 방식', value: '반열풍식 (대류열의 비율이 높음)' },
      { label: '무게', value: '약 90kg' },
    ],
    features: [
      '시간당 6kg 생산가능',
      '파이어스코프 및 아티산 연동',
      '싸이클론 모터 송풍량 전자식 제어',
      '드럼 속도 제어',
      '외부 프로파일 저장 10, 내부 50개',
      '자동 로스팅 중 설정 변환 기능',
      '예열 유지 기능',
      '로스팅 종료 후 자동 배출',
      '자동 로스터기 종료 기능',
      '로스터기 자동 오프 기능',
      '자동 쿨링 시작 및 자동 종료',
      '옵션 : 디지털 풍압계',
      '옵션 : 자동 투입',
    ],
    colors: ['#111111', '#ffffff', '#dc2626'],
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
