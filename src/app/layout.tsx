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
      <body className="bg-zinc-50">
        <div className="mx-auto min-h-screen max-w-7xl py-6">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
