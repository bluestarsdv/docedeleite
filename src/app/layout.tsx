import './style.css'

export const metadata = {
  title: 'Doce de Leite',
  description: 'Sua nova rede social aconchegante',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
