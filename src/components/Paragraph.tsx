type ParagraphProps = {
  text: string
}

export function Paragraph({ text }: ParagraphProps) {
  return (
    <p className="font-secondary text-justify indent-16 text-lg text-port-gray-600">
      {text}
    </p>
  )
}
