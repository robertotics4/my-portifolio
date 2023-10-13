type SubtitleProps = {
  text: string
}

export function Subtitle({ text }: SubtitleProps) {
  return <p className="text-port-gray-600 text-3xl">{text}</p>
}
