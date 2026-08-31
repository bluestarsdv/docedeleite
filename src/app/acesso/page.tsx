'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function DoceDeLeiteAcesso() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleAuth = async (isSignUp: boolean) => {
    setLoading(true)
    setMessage('')

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) throw error
        setMessage('Conta criada com sucesso! Verifique seu e-mail se necessário.')
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
        setMessage('Login realizado com sucesso! Bem-vindo ao Doce de Leite 🍮')
      }
    } catch (err: any) {
      setMessage('Erro: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setLoading(true)
    setMessage('')
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/acesso`,
        },
      })
      if (error) throw error
    } catch (err: any) {
      setMessage('Erro com o Google: ' + err.message)
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#4A3B32] flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-sm bg-white border border-[#EEDCC5] rounded-3xl p-8 shadow-xl">
        
        {/* Header do App */}
        <div className="text-center mb-8">
          <span className="text-4xl mb-2 inline-block">🍮</span>
          <h1 className="text-3xl font-black tracking-tight text-[#6D4C41]">Doce de Leite</h1>
          <p className="text-sm text-[#8D6E63] mt-1">Conecte-se com quem você gosta</p>
        </div>

        {/* Formulário por E-mail */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#795548] mb-1">Colocar o seu email</label>
            <input 
              type="email" 
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#D7CCC8] bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#8D6E63] text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#795548] mb-1">Senha</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#D7CCC8] bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#8D6E63] text-sm"
            />
          </div>

          {message && (
            <div className="p-3 text-xs rounded-xl bg-[#EFEBE9] text-[#5D4037] border border-[#D7CCC8] text-center">
              {message}
            </div>
          )}

          <button 
            onClick={() => handleAuth(false)}
            disabled={loading}
            className="w-full py-3 bg-[#8D6E63] hover:bg-[#6D4C41] text-white font-bold rounded-xl shadow-md transition-all active:scale-95 disabled:opacity-50"
          >
            {loading ? 'Carregando...' : 'Entrar'}
          </button>

          <button 
            onClick={() => handleAuth(true)}
            disabled={loading}
            className="w-full py-3 bg-white border border-[#8D6E63] text-[#8D6E63] hover:bg-[#EFEBE9] font-bold rounded-xl transition-all active:scale-95 disabled:opacity-50"
          >
            Cadastrar
          </button>

          {/* Divisor */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-[#EEDCC5]"></div>
            <span className="px-3 text-xs text-[#A1887F] uppercase">ou</span>
            <div className="flex-grow border-t border-[#EEDCC5]"></div>
          </div>

          {/* Botões do Google */}
          <button 
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full py-3 bg-white border border-[#D7CCC8] hover:bg-[#FAFAFA] text-[#4A3B32] font-medium rounded-xl shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2 text-sm disabled:opacity-50"
          >
            <span>G</span> Continuar com Google
          </button>

          <button 
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full py-3 bg-[#FAFAFA] border border-[#D7CCC8] hover:bg-[#EFEBE9] text-[#6D4C41] font-medium rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 text-sm disabled:opacity-50"
          >
            <span>G</span> Criar conta com Google
          </button>
        </div>

      </div>
    </main>
  )
}
