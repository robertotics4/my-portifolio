import { Github, Linkedin } from 'lucide-react'

type ItemProps = {
  title: string
  uri: string
}

function Item({ title, uri }: ItemProps) {
  return (
    <li>
      <a className="text-medium text-lg text-port-gray-600" href={uri}>
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
        <Item title="Home" uri="/" />
        <Item title="Layout" uri="/layout" />
        <Item title="Tech Stack" uri="/tech-stack" />
        <Item title="Projects" uri="/projects" />
        <Item title="Contact" uri="/contact" />
      </ul>

      <div className="flex items-center gap-3 p-4">
        <a href="#">
          <Github className="h-5 w-5 text-port-gray-600" />
        </a>
        <a href="#">
          <Linkedin className="h-5 w-5 text-port-gray-600" />
        </a>
      </div>
    </nav>
  )
}
