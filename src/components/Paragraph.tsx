type ParagraphProps = {
  text: string
}

export function Paragraph({ text }: ParagraphProps) {
  return (
    <p className="text-justify indent-16 text-xl/8 text-port-gray-600">
      {text}
    </p>
  )
}
