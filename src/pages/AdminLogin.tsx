import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

function AdminLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (error) {
      setError('이메일 또는 비밀번호가 올바르지 않습니다.')
      return
    }
    navigate('/admin')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas-soft px-6 font-display text-ink">
      <form onSubmit={handleSubmit} className="w-full max-w-[360px] rounded-none border border-hairline bg-canvas p-8">
        <h1 className="text-center text-[22px] font-[652] text-ink">관리자 로그인</h1>

        <div className="mt-8 flex flex-col gap-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일"
            className="w-full rounded-none border border-hairline bg-canvas px-4 py-2.5 text-[14px] text-ink placeholder:text-text-muted focus:border-ink focus:outline-none"
          />
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            className="w-full rounded-none border border-hairline bg-canvas px-4 py-2.5 text-[14px] text-ink placeholder:text-text-muted focus:border-ink focus:outline-none"
          />
        </div>

        {error && <p className="mt-4 text-[13px] text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-8 w-full rounded-none border border-ink bg-ink px-4 py-2.5 text-center text-[14px] font-[600] text-on-primary transition-colors hover:bg-canvas hover:text-ink disabled:opacity-50"
        >
          {loading ? '로그인 중...' : '로그인'}
        </button>
      </form>
    </div>
  )
}

export default AdminLogin
