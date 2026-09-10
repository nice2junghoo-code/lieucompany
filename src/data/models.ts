import b30sImage from '../assets/hero-roaster.png'
import b80Image from '../assets/model-b80.png'
import b80cImage from '../assets/model-b80c.png'
import b80sImage from '../assets/hero-roaster-b80s.png'

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
  {
    id: 'b80',
    name: 'BUJA ROASTER B80',
    tagline: '초보자부터 전문가까지 수준 높은 로스팅 구현',
    category: '전기식로스터기',
    image: b80Image,
  },
  {
    id: 'b80c',
    name: 'BUJA ROASTER B80C',
    tagline: '초보자부터 전문가까지 수준 높은 로스팅 구현',
    category: '전기식로스터기',
    image: b80cImage,
  },
  {
    id: 'b80s',
    name: 'BUJA ROASTER B80S',
    tagline: '초보자부터 전문가까지 수준 높은 로스팅 구현',
    category: '전기식로스터기',
    image: b80sImage,
  },
]
