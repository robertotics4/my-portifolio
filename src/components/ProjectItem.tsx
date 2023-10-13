import { Github, Link } from 'lucide-react'

export function ProjectItem() {
  return (
    <div className="rounded-2.5xl h-[35.43rem] bg-white shadow-2xl">
      <img
        src="https://via.placeholder.com/400x200"
        alt="Imagem de Capa"
        className="rounded-t-2.5xl h-64 w-full object-cover"
      />

      <div className="p-6">
        <h2 className="text-port-blue-800 text-2xl font-semibold">
          Título do Card
        </h2>
        <p className="text-port-gray-600 text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s
        </p>
        <p className="text-port-gray-600 text-sm">
          Tech stack: tech 01, tech 02, tech 03...
        </p>

        <div className="gap4 mt-6 flex justify-between">
          <a href="#" className="text-port-blue-800 flex gap-2 hover:underline">
            <Link />
            <span>Live Preview</span>
          </a>
          <a href="#" className="text-port-blue-800 flex gap-2 hover:underline">
            <Github />
            <span>Live Preview</span>
          </a>
        </div>
      </div>
    </div>
  )
}
