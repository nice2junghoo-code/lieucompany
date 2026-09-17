export type NewsItem = {
  id: string
  date: string
  title: string
  image?: string
}

// placeholder entries — swap in real dates/titles/images as they come in
export const NEWS: NewsItem[] = [
  { id: 'news-1', date: '2026-09-11', title: '뉴스 제목을 입력해 주세요' },
  { id: 'news-2', date: '2026-09-04', title: '뉴스 제목을 입력해 주세요' },
  { id: 'news-3', date: '2026-09-02', title: '뉴스 제목을 입력해 주세요' },
]
