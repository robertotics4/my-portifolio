import { Github, Linkedin } from 'lucide-react'

type ItemProps = {
  title: string
}

function Item({ title }: ItemProps) {
  return (
    <li>
      <a className="text-medium text-port-gray-600 text-lg" href="#">
        {title}
      </a>
    </li>
  )
}

export function Navbar() {
  return (
    <nav className="flex items-center">
      <strong>Logo</strong>

      <ul className="ml-auto flex space-x-10 p-4">
        <Item title="Home" />
        <Item title="Layout" />
        <Item title="Tech Stack" />
        <Item title="Projects" />
        <Item title="Contact" />
      </ul>

      <div className="flex items-center gap-3 p-4">
        <a href="#">
          <Github className="text-port-gray-600 h-5 w-5" />
        </a>
        <a href="#">
          <Linkedin className="text-port-gray-600 h-5 w-5" />
        </a>
      </div>
    </nav>
  )
}
