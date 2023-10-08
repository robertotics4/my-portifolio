import { Navbar } from '@/components/Navbar'
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
      <body>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
