import { ProjectLinks } from './ProjectLinks'

export type Project = {
  id: number
  title: string
  description: string
  techs: string[]
  links?: {
    livePreview?: string
    github?: string
  }
  imageUrl?: string
}

export function ProjectItem({
  title,
  description,
  techs,
  links,
  imageUrl,
}: Project) {
  const defaultImage = 'https://via.placeholder.com/400x200'

  return (
    <div className="h-[35.43rem] rounded-2.5xl bg-white shadow-xl dark:bg-port-gray-700 lg:shadow-2xl">
      <img
        src={imageUrl || defaultImage}
        alt="Imagem de Capa"
        className="h-64 w-full rounded-t-2.5xl object-cover"
      />
      <div className="px-5 py-6">
        <h2 className="lg:text-2x3 text-center font-secondary text-xl font-medium text-port-blue-800 dark:text-port-gray-300">
          {title}
        </h2>
        <p className="mt-2 line-clamp-6 h-36 text-start font-secondary text-sm font-light text-port-gray-600 dark:text-port-gray-300 lg:text-base">
          {description}
        </p>
        <p className="mt-2 truncate font-secondary text-sm font-normal text-port-gray-600 dark:text-port-gray-300">
          Tech stack: {techs.join(', ')}
        </p>

        <ProjectLinks livePreview={links?.livePreview} github={links?.github} />
      </div>
    </div>
  )
}
