import { SocialMedia } from './SocialMedia'

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

      <ul className="ml-auto flex space-x-12 p-4">
        <Item title="Home" uri="/" />
        <Item title="Layout" uri="/layout" />
        <Item title="Tech Stack" uri="/tech-stack" />
        <Item title="Projects" uri="/projects" />
        <Item title="Contact" uri="/contact" />
      </ul>

      <SocialMedia />
    </nav>
  )
}
