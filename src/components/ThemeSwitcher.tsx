'use client'

import * as Select from '@radix-ui/react-select'
import { Check, ChevronDown, Laptop2, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const themeIcons = {
  system: <Laptop2 className="h-5 w-5 text-port-gray-400" />,
  light: <Sun className="h-5 w-5 text-port-gray-400" />,
  dark: <Moon className="h-5 w-5 text-port-gray-400" />,
}

const themes = Object.keys(themeIcons)

export function ThemeSwitcher() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  function handleTheme(selectedTheme: string) {
    selectedTheme === 'system'
      ? setTheme(systemTheme as 'dark' | 'light')
      : setTheme(selectedTheme)
  }

  return (
    <Select.Root value={theme} onValueChange={handleTheme}>
      <Select.Trigger className="flex h-11 w-fit items-center justify-between gap-2 rounded-lg border border-port-gray-100 px-3 py-2 shadow-sm">
        <Select.Value className="text-port-gray-400" />

        <Select.Icon>
          <ChevronDown className="h-5 w-5 text-port-gray-400" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          sideOffset={8}
          side="bottom"
          position="popper"
          className="z-10 w-[--radix-select-trigger-width] rounded-lg border border-port-gray-100 bg-zinc-50"
        >
          <Select.Viewport>
            {themes.map((theme) => (
              <Select.Item
                key={theme}
                value={theme}
                className="flex gap-2 p-3 outline-none"
              >
                <Select.ItemText className="text-port-blue-800">
                  {themeIcons[theme as 'system' | 'light' | 'dark']}
                </Select.ItemText>
                <Select.ItemIndicator className="flex items-center gap-2 text-port-blue-800">
                  <Check className="h-3 w-3 text-port-blue-800" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
