import Image from 'next/image'
import profileImage from '../../public/assets/profile.png'

export function Presentation() {
  return (
    <div className="mt-24 flex flex-col items-center gap-8 text-center lg:mt-44 lg:flex-row-reverse lg:place-content-between lg:gap-0 lg:text-left">
      <div className="flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-r from-port-blue-400 to-port-pink-400 lg:h-84 lg:w-84">
        <Image
          src={profileImage}
          className="h-60 w-60 rounded-full saturate-0 filter lg:h-80 lg:w-80"
          alt="Profile do Roberto Oliveira"
        />
      </div>

      <div className="max-w-lg lg:max-w-2xl">
        <strong className="font-primary text-5xl text-port-blue-800 lg:text-6xl">
          Olá 👋, meu nome é{' '}
          <strong className="bg-gradient-to-r from-port-blue-400 to-port-pink-400 bg-clip-text text-transparent">
            Roberto Oliveira{' '}
          </strong>
          e transformo ideias em soluções de tecnologia
        </strong>
      </div>
    </div>
  )
}
