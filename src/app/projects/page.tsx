import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import { Project, ProjectItem } from '@/components/projects/ProjectItem'

// const projects: Project[] = [
//   {
//     id: 1,
//     title: 'Pix Token',
//     description:
//       'O Pix no Formato de Token é um processo para automatizar a Venda direta, para controlar as transferências de clientes para utilização desses valores em Filiais do Grupo Mateus, assim automatizando o processo e facilitando o processo de todas as áreas envolvidas.',
//     techs: ['Java', 'SpringBoot', 'MySQLServer'],
//     imageUrl:
//       'https://attachments.gupy.io/production/companies/502/career/1898/images/2020-08-03_11-34_logo.png',
//   },
//   {
//     id: 2,
//     title: 'Este portfólio',
//     description:
//       'Meu portfólio é o reflexo da minha paixão pela programação e pela criação de soluções digitais inovadoras. Explore meu trabalho e descubra uma coleção de projetos que demonstram minha habilidade em desenvolvimento web, desde websites elegantes e funcionais até aplicativos interativos. Com um compromisso com o design de qualidade e a usabilidade, estou pronto para transformar conceitos em realidade digital.',
//     techs: ['Next.js', 'Tailwind', 'Typescript'],
//     links: {
//       github: 'https://github.com/robertotics4/my-repo',
//     },
//   },
//   {
//     id: 3,
//     title: 'MKWhatsOne',
//     description:
//       'Uma das principais vantagens da ferramenta é a sua capacidade de conectar pessoas de forma rápida e conveniente. Com apenas alguns toques, você pode enviar mensagens instantâneas para colegas de trabalho, clientes ou parceiros de negócios. Essa comunicação ágil e direta permite tomar decisões mais rapidamente, agilizar processos e melhorar a produtividade.',
//     techs: ['Node.js', 'Kafka', 'Mongodb', 'Redis', 'Typescript'],
//     links: {
//       livePreview: '#',
//     },
//   },
//   {
//     id: 4,
//     title: 'Tela ágil',
//     description:
//       'Consiste em uma interface de atendimento com o objetivo de unificar em uma única tela os principais serviços gerados pelo atendente no Call Center, utilizando nossas APIs de serviços já construídas para Clara (chatbot) e Site/App.',
//     techs: ['Reactjs', 'Styled Components', 'Typescript'],
//     links: {
//       github: 'https://github.com/robertotics4/tela-agil',
//     },
//     imageUrl:
//       'https://camo.githubusercontent.com/959dfd7320bf15fba74c325070708139e080291181d8d49132f9b644b70168dc/68747470733a2f2f6d69722-...',
//   },
//   {
//     id: 5,
//     title: 'Acomp. de Serviços - EQTL',
//     description:
//       'A aplicação tem como objetivo possibilitar a consulta de informações detalhadas sobre sobre os protocolos das solicitações de serviço. As informações necessárias para executar as requisições são a conta contrato e o número de serviço.',
//     techs: ['Reactjs', 'Styled Components', 'Typescript'],
//     imageUrl:
//       'https://github.com/robertotics4/frontend-acompanhamento-servicos/raw/main/.github/capa.gif',
//   },
// ]

const projects: Project[] = []

export default function ProjectsPage() {
  return (
    <div className="flex flex-1 flex-col justify-center gap-4 py-12">
      <Title text="Projetos" />
      <Subtitle
        className="text-port-600 dark:text-port-gray-400"
        text="O que construí ou contribuí até agora?"
      />

      {projects.length > 0 ? (
        <div className="flex flex-col gap-8 lg:my-16 lg:grid lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </div>
      ) : (
        <p className="text-md font-secondary text-port-gray-600 dark:text-port-gray-400">
          Em breve 👨🏽‍💻
        </p>
      )}
    </div>
  )
}
