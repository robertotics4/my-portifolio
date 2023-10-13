import Image from 'next/image'
import profileImage from '../../public/assets/profile.png'

export function Presentation() {
  return (
    <div className="mt-60 flex place-content-between items-center">
      <div className="max-w-2x">
        <strong className="text-port-blue-800 text-6xl">
          Olá 👋,
          <br />
          meu nome é<br />
          <strong className="from-port-blue-400 to-port-pink-400 bg-gradient-to-r bg-clip-text text-transparent">
            Roberto Oliveira
          </strong>
          <br />e sou desenvolvedor de software
        </strong>
      </div>

      <div className="from-port-blue-400 to-port-pink-400 flex h-84 w-84 items-center justify-center rounded-full bg-gradient-to-r">
        <Image
          src={profileImage}
          className="h-80 w-80 rounded-full saturate-0 filter"
          alt="Profile do Roberto Oliveira"
        />
      </div>
    </div>
  )
}
