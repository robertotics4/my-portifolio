import { ComponentProps } from 'react'

type SubtitleProps = {
  text: string
} & ComponentProps<'p'>

export function Subtitle({ text, className, ...props }: SubtitleProps) {
  return (
    <p className={`font-secondary  ${className}`} {...props}>
      {text}
    </p>
  )
}
