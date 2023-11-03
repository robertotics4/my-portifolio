import { Navbar } from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'

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
      <body className="flex h-screen flex-col items-center bg-zinc-50 px-6 py-4 dark:bg-port-black-900">
        <div className="flex h-full w-full max-w-7xl flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
