type TitleProps = {
  text: string
}

export function Title({ text }: TitleProps) {
  return (
    <strong className="font-primary text-4xl text-port-blue-800 dark:text-port-gray-300 lg:text-5xl">
      {text}
    </strong>
  )
}
