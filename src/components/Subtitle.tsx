type SubtitleProps = {
  text: string
  fontSize?:
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
}

export function Subtitle({ text, fontSize = 'base' }: SubtitleProps) {
  return (
    <p className={`font-secondary text-port-gray-600 text-${fontSize}`}>
      {text}
    </p>
  )
}
