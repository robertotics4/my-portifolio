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
      className="flex gap-2 text-port-blue-800 hover:underline dark:text-port-gray-300"
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

export function ProjectLinks({ livePreview, github }: LinksContainerProps) {
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
