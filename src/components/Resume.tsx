import { Paragraph } from './Paragraph'
import { Title } from './Title'

type ResumeProps = {
  paragraphs: string[]
}

export function Resume({ paragraphs }: ResumeProps) {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <Title text="Sobre mim" />
      <div>
        {paragraphs.map((pagragraph, index) => (
          <Paragraph key={index} text={pagragraph} />
        ))}
      </div>
    </div>
  )
}
