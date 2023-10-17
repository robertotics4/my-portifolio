import { Github, Link } from 'lucide-react'

export function ProjectItem() {
  return (
    <div className="h-[35.43rem] rounded-2.5xl bg-white shadow-2xl">
      <img
        src="https://via.placeholder.com/400x200"
        alt="Imagem de Capa"
        className="h-64 w-full rounded-t-2.5xl object-cover"
      />

      <div className="p-6">
        <h2 className="text-2xl font-semibold text-port-blue-800">
          Título do Card
        </h2>
        <p className="text-lg text-port-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s
        </p>
        <p className="text-sm text-port-gray-600">
          Tech stack: tech 01, tech 02, tech 03...
        </p>

        <div className="gap4 mt-6 flex justify-between">
          <a href="#" className="flex gap-2 text-port-blue-800 hover:underline">
            <Link />
            <span>Live Preview</span>
          </a>
          <a href="#" className="flex gap-2 text-port-blue-800 hover:underline">
            <Github />
            <span>Live Preview</span>
          </a>
        </div>
      </div>
    </div>
  )
}
