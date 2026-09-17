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
}
