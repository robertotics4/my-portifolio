type TitleProps = {
  text: string
}

export function Title({ text }: TitleProps) {
  return (
    <strong className="font-primary text-5xl text-port-blue-800">{text}</strong>
  )
}
