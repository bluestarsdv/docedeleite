'use client'

import Link from 'next/link'
import './style.css'

export default function DoceDeLeiteHome() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-6 text-center relative overflow-hidden">
      
      {/* Detalhes de fundo decorativos */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F7EBE1] rounded-full filter blur-3xl opacity-60 -z-10"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#EFEBE9] rounded-full filter blur-3xl opacity-60 -z-10"></div>

      <div className="w-full max-w-md doce-card rounded-[2.5rem] p-10 relative">
        
        <div className="animate-float mb-6 inline-block">
          <div className="w-20 h-20 bg-[#F7EBE1] rounded-3xl mx-auto flex items-center justify-center text-4xl shadow-inner">
            🍮
          </div>
        </div>

        <h1 className="text-4xl font-black tracking-tight text-[#5D4037] mb-3">
          Doce de Leite
        </h1>
        
        <p className="text-[#8D6E63] text-sm mb-8 leading-relaxed font-medium">
          Sua nova rede social aconchegante. Conecte-se com quem importa, compartilhe momentos e sinta-se em casa.
        </p>

        <div className="space-y-3">
          <Link 
            href="/acesso"
            className="block w-full py-4 bg-[#8D6E63] hover:bg-[#6D4C41] text-white font-bold rounded-2xl shadow-lg shadow-[#8D6E63]/25 transition-all transform active:scale-95 text-center text-sm tracking-wide"
          >
            Entrar ou Criar Conta ✨
          </Link>
        </div>

        <div className="mt-8 text-xs text-[#A1887F] font-medium">
          Feito com carinho para você 💛
        </div>

      </div>
    </main>
  )
}
