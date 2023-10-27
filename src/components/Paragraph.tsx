type ParagraphProps = {
  text: string
}

export function Paragraph({ text }: ParagraphProps) {
  return (
    <p className="text-justify indent-12 font-secondary text-lg text-port-gray-600">
      {text}
    </p>
  )
}
