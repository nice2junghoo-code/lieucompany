import b30sImage from '../assets/hero-roaster.png'

export type Model = {
  id: string
  name: string
  tagline: string
  category: string
  image: string
}

export const MODELS: Model[] = [
  {
    id: 'b30s',
    name: 'BUJA ROASTER B30S',
    tagline: '스마트 기능이 탑재한 홈 로스팅 및 샘플용 로스터기',
    category: '전기식로스터기',
    image: b30sImage,
  },
]
