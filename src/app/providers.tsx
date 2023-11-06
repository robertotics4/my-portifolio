'use client'

import { ThemeProvider, useTheme } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  const { systemTheme } = useTheme()

  return (
    <ThemeProvider
      themes={['light', 'dark', 'system']}
      attribute="class"
      defaultTheme={systemTheme}
    >
      {children}
    </ThemeProvider>
  )
}
