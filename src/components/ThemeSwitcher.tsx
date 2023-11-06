'use client'

import * as Select from '@radix-ui/react-select'
import { Check, ChevronDown, Laptop2, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const themeIcons = {
  system: (
    <Laptop2 className="h-5 w-5 text-port-blue-800 dark:text-port-gray-400" />
  ),
  light: <Sun className="h-5 w-5 text-orange-500" />,
  dark: <Moon className="h-5 w-5 text-port-blue-400" />,
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
      <Select.Trigger
        className={`flex w-fit items-center justify-between gap-2 rounded-lg p-3 shadow-sm outline-none transition-all hover:brightness-90  ${
          theme === 'light' ? 'bg-yellow-300' : 'bg-port-blue-800'
        }`}
      >
        <Select.Value />
        <Select.Icon>
          <ChevronDown className="h-4 w-4 text-port-gray-400" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          sideOffset={8}
          side="bottom"
          position="popper"
          className="z-10 w-[--radix-select-trigger-width] items-center rounded-lg border border-port-gray-100 bg-zinc-50 dark:border-port-gray-700 dark:bg-port-black-700"
        >
          <Select.Viewport>
            {themes.map((theme) => (
              <Select.Item
                key={theme}
                value={theme}
                className="flex p-3 outline-none"
              >
                <Select.ItemText className="text-port-blue-800">
                  {themeIcons[theme as 'light' | 'dark' | 'system']}
                </Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
