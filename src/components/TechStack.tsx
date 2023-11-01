import javascript from '../../public/assets/techs/javascript.svg'
import typescript from '../../public/assets/techs/typescript.svg'
import java from '../../public/assets/techs/java.svg'
import nodejs from '../../public/assets/techs/nodejs.svg'
import spring from '../../public/assets/techs/spring.svg'
import react from '../../public/assets/techs/react.svg'
import tailwind from '../../public/assets/techs/tailwind.svg'
import github from '../../public/assets/techs/github.svg'
import kafka from '../../public/assets/techs/kafka.svg'
import prisma from '../../public/assets/techs/prisma.svg'
import jest from '../../public/assets/techs/jest.svg'
import vscode from '../../public/assets/techs/vscode.svg'
import { TechImage } from './TechImage'
import { Title } from './Title'
import { Subtitle } from './Subtitle'

export function TechStack() {
  return (
    <div className="mt-32 flex flex-col gap-4">
      <Title text="Minha Tech Stack" />
      <Subtitle
        className="text-port-gray-600 dark:text-port-gray-400"
        text="Tecnologias que tenho trabalhado recentemente"
      />

      <div className="my-14 grid grid-cols-3 place-items-center gap-24  lg:my-24 lg:grid-cols-6 lg:gap-28">
        <TechImage src={javascript} alt="Logo do Javascript" />
        <TechImage src={typescript} alt="Logo do Typescript" />
        <TechImage src={java} alt="Logo do Java" />
        <TechImage
          src={nodejs}
          alt="Logo do Node.js"
          className="dark:invert-1 dark:invert"
        />
        <TechImage src={spring} alt="Logo do SpringBoot" />
        <TechImage src={react} alt="Logo do Reactjs" />
        <TechImage src={tailwind} alt="Logo do Tailwind" />
        <TechImage
          src={github}
          alt="Logo do Github"
          className="dark:invert-1 dark:invert"
        />
        <TechImage
          src={kafka}
          alt="Logo do Kafka"
          className="dark:invert-1 dark:invert"
        />
        <TechImage
          src={prisma}
          alt="Logo do Prisma"
          className="dark:invert-1 dark:invert"
        />
        <TechImage src={jest} alt="Logo do Jest" />
        <TechImage src={vscode} alt="Logo do VSCode" />
      </div>
    </div>
  )
}
