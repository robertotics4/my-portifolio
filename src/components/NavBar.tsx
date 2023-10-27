import { Logo } from './Logo'

type ItemProps = {
  title: string
  uri: string
}

function Item({ title, uri }: ItemProps) {
  return (
    <li>
      <a
        className="text-medium font-secondary text-base text-port-gray-600 hover:text-port-blue-800"
        href={uri}
      >
        {title}
      </a>
    </li>
  )
}

export function Navbar() {
  return (
    <nav className="flex items-center">
      <Logo />

      <ul className="ml-auto flex space-x-12 p-4">
        <Item title="Início" uri="/" />
        <Item title="Sobre" uri="/about" />
        <Item title="Tech Stack" uri="/tech-stack" />
        <Item title="Projetos" uri="/projects" />
        <Item title="Contatos" uri="/contact" />
      </ul>
    </nav>
  )
}
