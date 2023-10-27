import { ReactElement } from 'react'

type ContactButtonProps = {
  url: string
  title: string
  icon: ReactElement
}

export function ContactButton({ url, icon, title }: ContactButtonProps) {
  console.log({
    url,
    icon,
    title,
  })

  return (
    <a
      href={url}
      className={`flex w-48 items-center justify-center gap-4 rounded-full bg-gradient-to-b from-port-blue-400 to-port-pink-400 p-4 font-semibold text-white transition-all duration-1000`}
    >
      {icon}
      {title}
    </a>
  )
}
