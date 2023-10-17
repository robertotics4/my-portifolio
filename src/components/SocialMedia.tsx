import { Github, Instagram, Linkedin } from 'lucide-react'

export function SocialMedia() {
  return (
    <div className="flex items-center gap-2 p-4">
      <a target="_blank" href="https://github.com/robertotics4">
        <Github className="h-5 w-5 text-port-gray-600" />
      </a>

      <a target="_blank" href="https://www.linkedin.com/in/robertotics4/">
        <Linkedin className="h-5 w-5 text-port-gray-600" />
      </a>

      <a target="_blank" href="#">
        <Instagram className="h-5 w-5 text-port-gray-600" />
      </a>
    </div>
  )
}
