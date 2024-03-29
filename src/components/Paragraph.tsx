type ParagraphProps = {
  text: string
}

export function Paragraph({ text }: ParagraphProps) {
  return (
    <p className="text-md text-justify indent-12 font-secondary text-port-gray-600 dark:text-port-gray-400 lg:text-lg">
      {text}
    </p>
  )
}
