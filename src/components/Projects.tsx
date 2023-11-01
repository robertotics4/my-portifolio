import { ProjectItem } from './ProjectItem'
import { Subtitle } from './Subtitle'
import { Title } from './Title'

export function Projects() {
  return (
    <div className="mt-32 flex flex-col gap-4">
      <Title text="Projetos" />
      <Subtitle
        className="text-port-600 dark:text-port-gray-400"
        text="O que construí ou contribuí até agora?"
      />

      <div className="my-12 flex flex-col gap-8 lg:my-16 lg:grid lg:grid-cols-3">
        <ProjectItem
          title="Pix Token"
          description="O Pix no Formato de Token é um processo para automatizar a Venda direta, para controlar as transferências de clientes para utilização desses valores em Filiais do Grupo Mateus, assim automatizando o processo e facilitando o processo de todas as áreas envolvidas. "
          techs={['Java', 'SpringBoot', 'MySQLServer']}
          imageUrl="https://attachments.gupy.io/production/companies/502/career/1898/images/2020-08-03_11-34_logo.png"
        />

        <ProjectItem
          title="Este portifólio"
          description="Meu portfólio é o reflexo da minha paixão pela programação e pela criação de soluções digitais inovadoras. Explore meu trabalho e descubra uma coleção de projetos que demonstram minha habilidade em desenvolvimento web, desde websites elegantes e funcionais até aplicativos interativos. Com um compromisso com o design de qualidade e a usabilidade, estou pronto para transformar conceitos em realidade digital."
          techs={['Next.js', 'Tailwind', 'Typescript']}
          links={{
            github: 'https://github.com/robertotics4/my-repo',
          }}
        />

        <ProjectItem
          title="MKWhatsOne"
          description="Uma das principais vantagens da ferramenta é a sua capacidade de conectar pessoas de forma rápida e conveniente. Com apenas alguns toques, você pode enviar mensagens instantâneas para colegas de trabalho, clientes ou parceiros de negócios. Essa comunicação ágil e direta permite tomar decisões mais rapidamente, agilizar processos e melhorar a produtividade."
          techs={['Node.js', 'Kafka', 'Mongodb', 'Redis', 'Typescript']}
          links={{
            livePreview: '#',
          }}
          imageUrl="data:image/png;base64,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"
        />

        <ProjectItem
          title="Tela ágil"
          description="Consiste em uma interface de atendimento com o objetivo de unificar em uma única tela os principais serviços gerados pelo atendente no Call Center, utilizando nossas APIs de serviços já construídas para Clara (chatbot) e Site/App."
          techs={['Reactjs', 'Styled Components', 'Typescript']}
          links={{
            github: 'https://github.com/robertotics4/tela-agil',
          }}
          imageUrl="https://camo.githubusercontent.com/959dfd7320bf15fba74c325070708139e080291181d8d49132f9b644b70168dc/68747470733a2f2f6d69722d73332d63646e2d63662e626568616e63652e6e65742f70726f6a6563745f6d6f64756c65732f646973702f3765623135653132323936373439312e363065346166316534336161342e706e67"
        />

        <ProjectItem
          title="Acomp. de Serviços - EQTL"
          description="A aplicação tem como objetivo possibilitar a consulta de informações detalhadas sobre sobre os protocolos das solicitações de serviço. As informações necessárias para executar as requisições são a conta contrato e o número de serviço."
          techs={['Reactjs', 'Styled Components', 'Typescript']}
          imageUrl="https://github.com/robertotics4/frontend-acompanhamento-servicos/raw/main/.github/capa.gif"
        />
      </div>
    </div>
  )
}
