import { ProfessionalExperience } from '@/components/ProfessionalExperience'
import { Job } from '@/components/ProfessionalExperience/JobItem'
import { Resume } from '@/components/Resume'

type AboutMe = {
  resume: {
    paragraphs: string[]
  }
  professionalExperience: {
    jobs: Job[]
  }
}

const aboutMe: AboutMe = {
  resume: {
    paragraphs: [
      'Sou um desenvolvedor back-end com mais de 3 anos de experiência na criação de software. Nasci em 1992 e tenho conhecimentos sólidos em Programação Orientada a Objetos, Node.js, Typescript, Javascript, React.js, Java, SpringBoot e bancos de dados relacionais e não relacionais.',
      'Atualmente, atuo como Desenvolvedor Back-End Sênior, onde trabalho no desenvolvimento de soluções tecnológicas para diversos ramos de negócios, incluindo atacado, varejo, mensageria e chatbots.',
      'Sou formado em Ciências da Computação e continuo aprimorando minhas habilidades com cursos e formação em tecnologias como AWS, Node.js, React e React Native.',
      'Com um forte conjunto de competências técnicas que abrange tanto o desenvolvimento back-end quanto front-end, estou preparado para enfrentar desafios tecnológicos e contribuir para o sucesso de projetos inovadores. Além disso, mantenho um constante aperfeiçoamento em inglês, o que me permite acompanhar as tendências globais no campo da tecnologia.',
      'Estou ansioso para aplicar meu conhecimento e experiência em novos projetos emocionantes. Se você procura um desenvolvedor dedicado, apaixonado pela tecnologia e pronto para criar soluções eficazes, estou à disposição para colaborar.',
    ],
  },
  professionalExperience: {
    jobs: [
      {
        id: 1,
        company: 'PULSE - Grupo Mateus',
        office: 'Backend Developer Senior',
        location: 'Remoto | São Luis - Maranhão',
        workload: 'full time',
        startDate: new Date('2022-06-06'),
      },
      {
        id: 2,
        company: 'MKOM Soluções Tecnológicas',
        office: 'Backend Developer Pleno',
        location: 'Remoto',
        workload: 'flex',
        startDate: new Date('2022-12-01'),
      },
      {
        id: 3,
        company: 'Instituto Equatorial',
        office: 'Full Stack Developer Pleno',
        location: 'Remoto',
        workload: 'full time',
        startDate: new Date('2022-03-14'),
        finalDate: new Date('2022-06-03'),
      },
      {
        id: 4,
        company: 'Núcleo de Estudos e Pesquisas do Nordeste',
        office: 'Full Stack Developer Pleno',
        location: 'Remoto',
        workload: 'full time',
        startDate: new Date('2020-03-23'),
        finalDate: new Date('2022-03-11'),
      },
    ],
  },
}

export default function AboutPage() {
  const { resume, professionalExperience } = aboutMe
  return (
    <div className="mt-16 flex flex-col gap-16 pb-24 pt-12">
      <Resume paragraphs={resume.paragraphs} />
      <ProfessionalExperience jobs={professionalExperience.jobs} />
    </div>
  )
}
