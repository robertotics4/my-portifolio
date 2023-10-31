import { Github, Link } from 'lucide-react'

type LinkProps = {
  type: 'preview' | 'github'
  title: string
  url: string
}

const linkIcons = {
  github: <Github size={20} />,
  preview: <Link size={20} />,
}

function LinkItem({ type, title, url }: LinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      className="flex gap-2 text-port-blue-800 hover:underline"
    >
      {linkIcons[type]}
      <span className="font-secondary text-base font-normal">{title}</span>
    </a>
  )
}

type LinksContainerProps = {
  livePreview?: string
  github?: string
}

function LinksContainer({ livePreview, github }: LinksContainerProps) {
  return (
    <div className="mt-6 flex justify-between gap-4">
      {livePreview && (
        <LinkItem
          type="preview"
          title="Live Preview"
          url={livePreview || '#'}
        />
      )}

      {github && (
        <LinkItem type="github" title="View Code" url={github || '#'} />
      )}
    </div>
  )
}

type ProjectItemProps = {
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
}: ProjectItemProps) {
  const defaultImage = 'https://via.placeholder.com/400x200'

  return (
    <div className="h-[35.43rem] rounded-2.5xl bg-white shadow-xl lg:shadow-2xl">
      <img
        src={imageUrl || defaultImage}
        alt="Imagem de Capa"
        className="h-64 w-full rounded-t-2.5xl object-cover"
      />
      <div className="p-6">
        <h2 className="lg:text-2x3 text-center font-secondary text-xl font-medium text-port-blue-800">
          {title}
        </h2>
        <p className="mt-2 line-clamp-6 h-36 text-justify font-secondary text-sm font-light text-port-gray-600 lg:text-base">
          {description}
        </p>
        <p className="mt-2 truncate font-secondary text-sm font-normal text-port-gray-600">
          Tech stack: {techs.join(', ')}
        </p>

        <LinksContainer
          livePreview={links?.livePreview}
          github={links?.github}
        />
      </div>
    </div>
  )
}
