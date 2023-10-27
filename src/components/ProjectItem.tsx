import { Github, Link } from 'lucide-react'

type LinkProps = {
  icon: React.ReactElement
  title: string
  url: string
}

function LinkItem({ icon, title, url }: LinkProps) {
  return (
    <a href={url} className="flex gap-2 text-port-blue-800 hover:underline">
      {icon}
      <span className="font-secondary text-base font-normal">{title}</span>
    </a>
  )
}

function LinksContainer() {
  return (
    <div className="gap4 mt-6 flex justify-between">
      <LinkItem icon={<Link size={20} />} title="Live Preview" url="#" />
      <LinkItem icon={<Github size={20} />} title="View Code" url="#" />
    </div>
  )
}

export function ProjectItem() {
  return (
    <div className="h-[35.43rem] rounded-2.5xl bg-white shadow-2xl">
      <img
        src="https://via.placeholder.com/400x200"
        alt="Imagem de Capa"
        className="h-64 w-full rounded-t-2.5xl object-cover"
      />

      <div className="p-6">
        <h2 className="text-center font-secondary text-2xl font-medium text-port-blue-800">
          Título do Card
        </h2>
        <p className="mt-2 font-secondary text-lg font-light text-port-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s
        </p>
        <p className="font-secondary text-sm font-normal text-port-gray-600">
          Tech stack: tech 01, tech 02, tech 03...
        </p>

        <LinksContainer />
      </div>
    </div>
  )
}
