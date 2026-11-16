import { createClient } from '@supabase/supabase-js'

// .trim() guards against stray whitespace/newlines that can sneak in when
// pasting the value into a host's environment variable dashboard
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL.trim()
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY.trim()

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type NewsRow = {
  id: string
  date: string
  title: string
  content: string | null
  image_url: string | null
  created_at: string
  // 'news' (default) or 'relocation' (이전 설치 사례). Missing until the column exists in Supabase, so treat undefined as 'news'.
  category?: string | null
  // all photos of the post in order (first = cover = image_url); missing until the column exists in Supabase
  images?: string[] | null
}

export const NEWS_CATEGORY = 'news'
export const RELOCATION_CATEGORY = 'relocation'

export const isNewsPost = (post: NewsRow) => (post.category ?? NEWS_CATEGORY) === NEWS_CATEGORY
