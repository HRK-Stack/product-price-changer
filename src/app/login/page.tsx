'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  function handleLogin() {
    setError(null)

    if (!username || !password) {
      setError('Username and password are required.')
      return
    }

    // Demo-only auth
    if (username === 'admin' && password === 'admin123') {
      document.cookie = 'admin=true; path=/'
      router.push('/admin/products')
    } else {
      setError('Invalid login details.')
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-lg shadow-sm">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200">
          <h1 className="text-lg font-semibold text-slate-800">
            Admin Login
          </h1>
          <p className="text-sm text-slate-500">
            Sign in to manage products and prices
          </p>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-4">
          {error && (
            <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded px-3 py-2">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 text-black"
              placeholder="admin"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 text-black"
              placeholder="••••••••"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50">
          <button
            onClick={handleLogin}
            className="w-full bg-slate-800 text-white text-sm font-medium py-2 rounded-md hover:bg-slate-700"
          >
            Sign In
          </button>
        </div>
      </div>
    </main>
  )
}
