'use client'

import * as Collapsible from '@radix-ui/react-collapsible'

import { Logo } from './Logo'
import { Menu } from 'lucide-react'
import { ThemeSwitcher } from './ThemeSwitcher'

type ItemProps = {
  title: string
  uri: string
}

function Item({ title, uri }: ItemProps) {
  return (
    <li className="w-full transform p-8 text-center transition-all hover:scale-110 lg:w-24 lg:px-0 lg:py-4 lg:hover:scale-100">
      <a
        className="text-medium font-secondary text-xl text-port-gray-600 transition-colors dark:text-port-gray-400 dark:hover:text-white lg:text-base"
        href={uri}
      >
        {title}
      </a>
    </li>
  )
}

export function Navbar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col lg:relative lg:flex-row lg:place-content-between lg:items-center">
      <div className="flex w-full place-content-between items-center bg-zinc-50 p-4 shadow-lg dark:bg-port-black-700 dark:shadow-port-black-700 lg:px-0 lg:shadow-transparent">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <button
            type="button"
            className="rounded-lg p-4 transition-colors duration-300 hover:bg-port-gray-50"
          >
            <Menu className="h-6 w-6 text-port-gray-600" />
          </button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <ul className="flex h-screen flex-col items-center bg-zinc-50 dark:bg-port-black-700 lg:h-auto lg:flex-row lg:space-x-12">
          <Item title="Início" uri="/" />
          <Item title="Sobre" uri="/about" />
          <Item title="Tech Stack" uri="/tech-stack" />
          <Item title="Projetos" uri="/projects" />
          <Item title="Contatos" uri="/contact" />

          <ThemeSwitcher />
        </ul>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
