import Image from 'next/image'
import profileImage from '../../public/assets/profile.png'

export function Presentation() {
  return (
    <div className="mt-44 flex place-content-between items-center">
      <div className="max-w-2xl">
        <strong className="font-primary text-6xl text-port-blue-800">
          Olá 👋,
          <br />
          meu nome é<br />
          <strong className="bg-gradient-to-r from-port-blue-400 to-port-pink-400 bg-clip-text text-transparent">
            Roberto Oliveira
          </strong>
          <br />e transformo ideias em soluções de tecnologia
        </strong>
      </div>

      <div className="flex h-84 w-84 items-center justify-center rounded-full bg-gradient-to-r from-port-blue-400 to-port-pink-400">
        <Image
          src={profileImage}
          className="h-80 w-80 rounded-full saturate-0 filter"
          alt="Profile do Roberto Oliveira"
        />
      </div>
    </div>
  )
}
