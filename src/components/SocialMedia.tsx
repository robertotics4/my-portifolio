import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'

type SocialMediaItemProps = {
  icon: React.ReactElement
  url?: string
}

function SocialMediaItem({ icon, url }: SocialMediaItemProps) {
  return (
    <a href={url} target="_blank">
      {icon}
    </a>
  )
}

export function SocialMedia() {
  return (
    <div className="flex items-center gap-4 p-2">
      <SocialMediaItem
        icon={
          <Github className="h-5 w-5 text-port-gray-600 transition-colors hover:text-port-blue-800 dark:text-port-gray-400 dark:hover:text-white" />
        }
        url="https://github.com/robertotics4"
      />
      <SocialMediaItem
        icon={
          <Linkedin className="h-5 w-5 text-port-gray-600 transition-colors hover:text-port-blue-800 dark:text-port-gray-400 dark:hover:text-white" />
        }
        url="https://www.linkedin.com/in/robertotics4/"
      />
      <SocialMediaItem
        icon={
          <Instagram className="h-5 w-5 text-port-gray-600 transition-colors hover:text-port-blue-800 dark:text-port-gray-400 dark:hover:text-white" />
        }
        url="https://www.instagram.com/robertooliveiracs4/"
      />
      <SocialMediaItem
        icon={
          <Twitter className="h-5 w-5 text-port-gray-600 transition-colors hover:text-port-blue-800 dark:text-port-gray-400 dark:hover:text-white" />
        }
        url="#"
      />
    </div>
  )
}
