import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/NavBar'
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
      <body className="dark:bg-port-black-700 flex h-screen flex-col items-center bg-zinc-50 px-6 py-4">
        <div className="flex h-full w-full max-w-7xl flex-col">
          <Navbar />
          <main className="flex flex-1 flex-col pt-20 lg:pt-0">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
