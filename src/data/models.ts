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
import b500sGalleryDrum from '../assets/b500s-gallery-drum.jpg'
import b500sGalleryPanel from '../assets/b500s-gallery-panel.jpg'
import b500sGalleryGraph from '../assets/b500s-gallery-graph.jpg'
import b500sGalleryHeater from '../assets/b500s-gallery-heater.jpg'
import b500sGalleryFeeder from '../assets/b500s-gallery-feeder.jpg'
import b500sGalleryDischarge from '../assets/b500s-gallery-discharge.jpg'
import b500sgGalleryBurner from '../assets/b500sg-gallery-burner.jpg'
import b15kSgGalleryElevator from '../assets/b15k-sg-gallery-feeder-elevator.jpg'

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
  // detail-page spec table — filled in per model as the info comes in.
  // `order` optionally overrides desktop (sm+) grid position only — mobile
  // always follows array order — for cases where two rows should swap
  // columns on desktop without changing the single-column mobile order.
  specs?: { label: string; value: string; order?: number }[]
  // grouped spec tables (each with its own heading) — used instead of
  // `specs` when a model has multiple variants with separate spec sets
  specGroups?: { heading: string; rows: { label: string; value: string }[] }[]
  // detail-page bullet list of feature highlights
  features?: string[]
  // detail-page color swatches (hex)
  colors?: string[]
  // detail-page component gallery — photo + title/subtitle/description per part
  detailGallery?: { title: string; subtitle?: string; description: string; image?: string }[]
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
    tagline:
      '부자 로스터 B150 모델은 기본형 · 쿨러 장착형 · 스마트 자동화형의 3가지 타입으로 구성되어 있으며 카페 및 소규모 로스팅 환경은 물론 소량 납품용 생산에도 적합한 설계로 제작되었습니다. 정밀한 로스팅 제어가 가능해 초보자부터 전문가까지 안정적으로 운용할 수 있습니다.',
    categories: ['전기식로스터기'],
    image: b150Image,
    specs: [
      { label: '투입량', value: '300g ~ 1.2kg (최대 1.5kg)' },
      { label: '열원', value: '코일 히터' },
      { label: '전압', value: 'AC220V / 60Hz' },
      { label: '드럼 재질', value: '국산 SUS 304' },
      { label: '제조국', value: 'Made in Korea' },
      { label: '크기', value: '1050 x 340 x 880mm' },
      { label: '로스팅 방식', value: '반열풍식 (전도열의 비율이 높음)' },
      { label: '무게', value: '약 95kg' },
      { label: '드럼 두께', value: '4T' },
    ],
    features: [
      '시간당 4.8kg 생산가능',
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
    id: 'b150c',
    name: '부자로스터 B150C',
    tagline:
      '부자 로스터 B150 모델은 기본형 · 쿨러 장착형 · 스마트 자동화형의 3가지 타입으로 구성되어 있으며 카페 및 소규모 로스팅 환경은 물론 소량 납품용 생산에도 적합한 설계로 제작되었습니다. 정밀한 로스팅 제어가 가능해 초보자부터 전문가까지 안정적으로 운용할 수 있습니다.',
    categories: ['전기식로스터기'],
    image: b150cImage,
    specs: [
      { label: '투입량', value: '300g ~ 1.2kg (최대 1.5kg)' },
      { label: '열원', value: '코일 히터' },
      { label: '전압', value: 'AC220V / 60Hz' },
      { label: '드럼 재질', value: '국산 SUS 304' },
      { label: '제조국', value: 'Made in Korea' },
      { label: '크기', value: '1050 x 340 x 880mm' },
      { label: '로스팅 방식', value: '반열풍식 (전도열의 비율이 높음)' },
      { label: '무게', value: '약 95kg' },
      { label: '드럼 두께', value: '4T' },
    ],
    features: [
      '시간당 4.8kg 생산가능',
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
    id: 'b150s',
    name: '부자로스터 B150S',
    tagline:
      '부자 로스터 B150 모델은 기본형 · 쿨러 장착형 · 스마트 자동화형의 3가지 타입으로 구성되어 있으며 카페 및 소규모 로스팅 환경은 물론 소량 납품용 생산에도 적합한 설계로 제작되었습니다. 정밀한 로스팅 제어가 가능해 초보자부터 전문가까지 안정적으로 운용할 수 있습니다.',
    categories: ['전기식로스터기'],
    image: b150sImage,
    specs: [
      { label: '투입량', value: '300g ~ 1.2kg (최대 1.5kg)' },
      { label: '열원', value: '코일 히터' },
      { label: '전압', value: 'AC220V / 60Hz' },
      { label: '드럼 재질', value: '국산 SUS 304' },
      { label: '제조국', value: 'Made in Korea' },
      { label: '크기', value: '1050 x 340 x 880mm' },
      { label: '로스팅 방식', value: '반열풍식 (전도열의 비율이 높음)' },
      { label: '무게', value: '약 95kg' },
      { label: '드럼 두께', value: '4T' },
    ],
    features: [
      '시간당 4.8kg 생산가능',
      '파이어스코프 및 아티산 연동',
      '10단 댐퍼 조정 가능 (기본 개방상태 추천)',
      '로스팅 후 자동 배출 및 자동 쿨링',
      '모듈형 서랍식 히터 방식',
      '모듈형 쿨러',
      '교반 쿨러 장착 (옵션)',
      '모듈형 서랍식 특허등록 (제10-1971999호)',
      '[B150S 스마트 자동화형] 스마트폰 블루투스 연동',
      '[B150S 스마트 자동화형] 프로파일 저장 (스마트패드)',
      '[B150S 스마트 자동화형] 수동전환을 통해 아날로그 수동 방식 로스팅 가능',
      '[B150S 스마트 자동화형] 파이어스코프 및 아티산 연동 가능',
    ],
    colors: ['#111111', '#ffffff', '#dc2626'],
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
    tagline:
      '부자 로스터 B500은 전기식 스마트형 B500S와 가스식 B500S.G 모델로 구성되어 있으며 중·대형 카페와 원두 납품용 로스터리에 적합하게 설계되었습니다. 자동 예열부터 스마트 로스팅까지 세팅 값이 미리 적용되어 있어 원하는 용량과 배전도만 선택하면 로스팅 시작부터 종료, 자동 쿨링까지 전 과정이 자동으로 진행됩니다. 이를 통해 초보자부터 전문가까지 누구나 손쉽게 안정적이고 수준 높은 로스팅을 구현할 수 있습니다.',
    categories: ['전기식로스터기', '대형로스터기'],
    image: b500sImage,
    specs: [
      { label: '제조국', value: 'Made in Korea' },
      { label: '항목', value: 'B500S(전기식)' },
      { label: '드럼 재질', value: '국산 SUS 304' },
      { label: '전원', value: 'AC220V / 380V / 60Hz' },
      { label: '로스터기 크기', value: '1900 x 750 x 1830mm' },
      { label: '소비 전력', value: '14kW' },
      { label: '컨트롤박스 크기', value: '400 x 300 x 880mm' },
      { label: '드럼 두께', value: '6T' },
      { label: '무게', value: '약 400kg' },
      { label: '로스팅 방식', value: '반열풍식 / 전기 코일 히터' },
    ],
    features: [
      '시간당 16kg 생산 가능',
      '싸이클론 모터 송풍량 전자식 제어',
      '드럼 속도 제어',
      '프로파일 저장 50개',
      '생두 자동 투입',
      '자동 로스팅 중 설정 변환 가능',
      '예열 유지 기능',
      '로스팅 종료 후 자동 배출 및 자동 종료 기능',
      '옵션 : 디지털 풍압계',
    ],
    colors: ['#111111', '#ffffff', '#dc2626'],
    detailGallery: [
      {
        title: '드럼 내부 구조',
        subtitle: '로스팅 드럼 내부',
        description: '균일한 교반을 위한 스크루형 날개 구조입니다.',
        image: b500sGalleryDrum,
      },
      {
        title: '전기 코일 히터',
        description: '고르게 분산되는 열로 안정적인 로스팅 환경을 제공합니다.',
        image: b500sGalleryHeater,
      },
      {
        title: '자동 투입 장치 (생두)',
        subtitle: '자동 생두 투입 장치',
        description: '버튼 한 번으로 생두를 손쉽게 투입할 수 있어 작업 효율이 높아집니다.',
        image: b500sGalleryFeeder,
      },
      {
        title: '제어 터치 패널',
        subtitle: '듀얼존 터치 패널',
        description: '화력·배기·냉각을 직관적으로 제어할 수 있습니다.',
        image: b500sGalleryPanel,
      },
      {
        title: '자동 배출 장치 (원두)',
        subtitle: '자동 배출 장치',
        description: '로스팅이 완료된 원두를 자동으로 배출하여 일정한 품질과 안전성을 확보합니다.',
        image: b500sGalleryDischarge,
      },
      {
        title: '실시간 그래프 화면',
        subtitle: '로스팅 프로파일 UI',
        description: '온도, 화력, 배기 등 데이터를 실시간으로 확인할 수 있습니다.',
        image: b500sGalleryGraph,
      },
    ],
  },
  {
    id: 'b500sg',
    name: '부자로스터 B500SG',
    tagline:
      '부자 로스터 B500은 전기식 스마트형 B500S와 가스식 B500S.G 모델로 구성되어 있으며 중·대형 카페와 원두 납품용 로스터리에 적합하게 설계되었습니다. 자동 예열부터 스마트 로스팅까지 세팅 값이 미리 적용되어 있어 원하는 용량과 배전도만 선택하면 로스팅 시작부터 종료, 자동 쿨링까지 전 과정이 자동으로 진행됩니다. 이를 통해 초보자부터 전문가까지 누구나 손쉽게 안정적이고 수준 높은 로스팅을 구현할 수 있습니다.',
    categories: ['가스식로스터기', '대형로스터기'],
    image: b500sgImage,
    specs: [
      { label: '제조국', value: 'Made in Korea' },
      { label: '항목', value: 'B500S.G(가스식)' },
      { label: '드럼 재질', value: '국산 SUS 304' },
      { label: '전원', value: 'AC220V / 60Hz' },
      { label: '로스터기 크기', value: '1900 x 750 x 1830mm' },
      { label: '소비 전력', value: '1.5kW' },
      { label: '컨트롤박스 크기', value: '400 x 300 x 880mm' },
      { label: '드럼 두께', value: '8T' },
      { label: '무게', value: '약 400kg' },
      { label: '로스팅 방식', value: '반열풍식 + 메탈파이어 버너' },
    ],
    features: [
      '시간당 16kg 생산 가능',
      '싸이클론 모터 송풍량 전자식 제어',
      '드럼 속도 제어',
      '프로파일 저장 50개',
      '생두 자동 투입',
      '자동 로스팅 중 설정 변환 가능',
      '예열 유지 기능',
      '로스팅 종료 후 자동 배출 및 자동 종료 기능',
      '옵션 : 디지털 풍압계',
    ],
    colors: ['#111111', '#ffffff', '#dc2626'],
    detailGallery: [
      {
        title: '드럼 내부 구조',
        subtitle: '로스팅 드럼 내부',
        description: '균일한 교반을 위한 스크루형 날개 구조입니다.',
        image: b500sGalleryDrum,
      },
      {
        title: '버너 챔버',
        subtitle: '가스 버너 연소실',
        description: '안정적인 화력으로 일관된 로스팅을 제공합니다.',
        image: b500sgGalleryBurner,
      },
      {
        title: '자동 투입 장치 (생두)',
        subtitle: '자동 생두 투입 장치',
        description: '버튼 한 번으로 생두를 손쉽게 투입할 수 있어 작업 효율이 높아집니다.',
        image: b500sGalleryFeeder,
      },
      {
        title: '제어 터치 패널',
        subtitle: '듀얼존 터치 패널',
        description: '화력·배기·냉각을 직관적으로 제어할 수 있습니다.',
        image: b500sGalleryPanel,
      },
      {
        title: '자동 배출 장치 (원두)',
        subtitle: '자동 배출 장치',
        description: '로스팅이 완료된 원두를 자동으로 배출하여 일정한 품질과 안전성을 확보합니다.',
        image: b500sGalleryDischarge,
      },
      {
        title: '실시간 그래프 화면',
        subtitle: '로스팅 프로파일 UI',
        description: '온도, 화력, 배기 등 데이터를 실시간으로 확인할 수 있습니다.',
        image: b500sGalleryGraph,
      },
    ],
  },
  {
    id: 'b15k-sg',
    name: '부자로스터 B15K SG',
    tagline:
      '부자 로스터 B15K S.G 모델은 가스식 로스터기 입니다. 원두 납품용 로스터리에 적합하도록 설계되어 자동 예열부터 스마트 로스팅까지 세팅 값이 미리 정해져 있어 원하는 용량과 배전도를 선택하기만 하면 로스팅 시작부터 종료 후 자동 쿨링 기능까지 탑재되어 있어 초보자부터 전문가까지 누구나 손쉽게 수준 높은 로스팅을 구현할 수 있습니다.',
    categories: ['가스식로스터기', '대형로스터기'],
    image: b15kSgImage,
    imageScale: 1.1,
    specs: [
      { label: '전압', value: '380V 3상 4선식' },
      { label: '소비전력', value: '3KW' },
      { label: '제조국', value: 'Made in Korea' },
      { label: '로스팅 방식', value: '반열풍식(대류열의 비율이 높음)' },
      { label: '열원', value: '메탈화이버 버너' },
      { label: '드럼 재질', value: '국산 SUS 304' },
      { label: '드럼 두께', value: '10T', order: 8 },
      { label: '로스터기 크기', value: '2650 x 1050 x 2010mm', order: 7 },
      { label: '컨트롤박스 크기', value: '400 x 300 x 880mm' },
      { label: '무게', value: '약 760kg' },
    ],
    features: [
      '시간당 55kg 생산 가능',
      '싸이클론 모터 송풍향 전자식 제어',
      '드럼 속도 제어',
      '외부 프로파일 저장 10개, 내부 50개',
      '자동 로스팅 중 설정 변환 기능',
      '예열 유지 기능',
      '로스팅 종료 후 자동 배출',
      '자동 로스팅시 자동 투입',
      '로스터기 자동 오프(off) 기능',
      '자동 쿨링 시작 및 자동 종료',
      '생두 자동 투입',
      '생두 이송기 연동 가능',
      '옵션 : 디지털 풍압계',
    ],
    colors: ['#111111', '#ffffff', '#dc2626'],
    detailGallery: [
      {
        title: '드럼 내부 구조',
        subtitle: '로스팅 드럼 내부',
        description: '균일한 교반을 위한 스크루형 날개 구조입니다.',
        image: b500sGalleryDrum,
      },
      {
        title: '버너 챔버',
        subtitle: '가스 버너 연소실',
        description: '안정적인 화력으로 일관된 로스팅을 제공합니다.',
        image: b500sgGalleryBurner,
      },
      {
        title: '자동 투입 장치 (생두)',
        subtitle: '자동 생두 투입 장치',
        description: '버튼 한 번으로 생두를 손쉽게 투입할 수 있어 작업 효율이 높아집니다.',
        image: b500sGalleryFeeder,
      },
      {
        title: '제어 터치 패널',
        subtitle: '듀얼존 터치 패널',
        description: '화력·배기·냉각을 직관적으로 제어할 수 있습니다.',
        image: b500sGalleryPanel,
      },
      {
        title: '자동 배출 장치 (원두)',
        subtitle: '자동 배출 장치',
        description: '로스팅이 완료된 원두를 자동으로 배출하여 일정한 품질과 안전성을 확보합니다.',
        image: b500sGalleryDischarge,
      },
      {
        title: '생두 이송기',
        description: '하단 생두호퍼받이에 넣은 생두를 이송 버튼 한 번으로 로스터 상부 호퍼까지 자동으로 올려줍니다.',
        image: b15kSgGalleryElevator,
      },
      {
        title: '실시간 그래프 화면',
        subtitle: '로스팅 프로파일 UI',
        description: '온도, 화력, 배기 등 데이터를 실시간으로 확인할 수 있습니다.',
        image: b500sGalleryGraph,
      },
    ],
  },
  {
    id: 'buja-table',
    name: '부자테이블',
    tagline:
      '부자로스터 모델별 일체형 테이블 제품입니다. 부자로스터기와 전용 테이블이 결합되어 더욱 세련된 디자인을 연출할 수 있습니다.',
    categories: ['테이블'],
    image: bujaTableImage,
    badgeLabel: 'BUJA TABLE',
    specGroups: [
      {
        heading: '부자로스터 테이블',
        rows: [
          { label: '사이즈', value: '1000 x 420 x 700mm' },
          { label: '무게', value: '약 20kg' },
          { label: '모델', value: 'B80 모델, B150 모델 전용' },
        ],
      },
      {
        heading: 'B180 모델 전용 테이블',
        rows: [
          { label: '사이즈', value: '1200 x 420 x 700mm' },
          { label: '무게', value: '약 20kg' },
          { label: '모델', value: 'B180 모델 전용 테이블' },
        ],
      },
      {
        heading: 'B30 모델 전용 테이블',
        rows: [
          { label: '사이즈', value: '770 x 420 x 700mm' },
          { label: '무게', value: '약 20kg' },
          { label: '모델', value: 'B30 모델 전용 테이블' },
        ],
      },
    ],
    colors: ['#111111', '#ffffff', '#dc2626'],
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
