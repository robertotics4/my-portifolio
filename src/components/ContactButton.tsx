import { ReactElement } from 'react'

type ContactButtonProps = {
  url: string
  title: string
  icon: ReactElement
  gradientDirection?: 'r' | 'l' | 'tr' | 'tl' | 'br' | 'bl'
}

export function ContactButton({
  url,
  icon,
  title,
  gradientDirection = 'r',
}: ContactButtonProps) {
  return (
    <a
      href={url}
      className={`flex w-48 items-center justify-center gap-4 rounded-full bg-port-green-800 bg-gradient-to-${gradientDirection} from-port-blue-400 to-port-pink-400 p-4 font-semibold text-white transition-all duration-1000`}
    >
      {icon}
      {title}
    </a>
  )
}
