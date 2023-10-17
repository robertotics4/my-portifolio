import { Navbar } from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portifólio - Roberto Oliveira (Dev)',
  description: 'Criado com Next.js + Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col items-center bg-zinc-50 py-6">
        <div className="flex h-full w-full max-w-7xl flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
