type TitleProps = {
  text: string
}

export function Title({ text }: TitleProps) {
  return <strong className="text-port-blue-800 text-5xl">{text}</strong>
}
