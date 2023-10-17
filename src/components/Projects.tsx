import { ProjectItem } from './ProjectItem'
import { Subtitle } from './Subtitle'
import { Title } from './Title'

export function Projects() {
  return (
    <div className="mt-32 flex flex-col gap-4">
      <Title text="Projetos" />
      <Subtitle text="O que construí até agora?" />

      <div className="mt-16 grid grid-cols-3 gap-8">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  )
}
