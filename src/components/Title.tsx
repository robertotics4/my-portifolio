type TitleProps = {
  text: string
}

export function Title({ text }: TitleProps) {
  return (
    <strong className="font-primary text-4xl text-port-blue-800 lg:text-5xl">
      {text}
    </strong>
  )
}
