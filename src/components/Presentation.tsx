import Image from 'next/image'
import profileImage from '../../public/assets/profile.png'

export function Presentation() {
  return (
    <div className="mt-36 flex place-content-between items-center">
      <div className="max-w-2x">
        <strong className="text-5xl text-zinc-700">
          Olá 👋,
          <br />
          meu nome é<br />
          Roberto Oliveira
          <br />e sou desenvolvedor de software
        </strong>
      </div>

      <div className="w-84 h-84 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-pink-500">
        <Image
          src={profileImage}
          className="h-80 w-80 rounded-full saturate-0 filter"
          alt="Profile do Roberto Oliveira"
        />
      </div>
    </div>
  )
}
