'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      themes={['light', 'dark']}
      attribute="class"
      defaultTheme="dark"
    >
      {children}
    </ThemeProvider>
  )
}
