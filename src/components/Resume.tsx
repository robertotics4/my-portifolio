import { Paragraph } from './Paragraph'
import { Title } from './Title'

export function Resume() {
  return (
    <div className="flex flex-col gap-8">
      <Title text="Sobre mim" />
      <div>
        <Paragraph text="Sou um desenvolvedor back-end com mais de 3 anos de experiência na criação de software. Nasci em 1992 e tenho conhecimentos sólidos em Programação Orientada a Objetos, Node.js, Typescript, Javascript, React.js, Java, SpringBoot e bancos de dados relacionais e não relacionais." />
        <Paragraph text="Atualmente, atuo como Desenvolvedor Back-End Sênior na PULSE, o setor de tecnologia do Grupo Mateus, onde trabalhamos no desenvolvimento de soluções tecnológicas para diversos ramos de negócios, incluindo atacado, varejo, indústria e distribuição de farmacêuticos." />
        <Paragraph text="Além disso, na minha experiência na MKOM Tecnologia, trabalhei como Desenvolvedor Back-End Pleno, focando em construir e manter funcionalidades de comunicação via WhatsApp para campanhas e envio de mensagens instantâneas, utilizando Node.js, Typescript e AWS." />
        <Paragraph text="Anteriormente, na Equatorial Energia, participei do Squad Transformação Digital, onde desenvolvemos produtos digitais e APIs. Destaco o projeto de API de Solicitações da Clara, onde atuei como arquiteto do protótipo, desenvolvedor back-end e DevOps, utilizando Node.js e React.js." />
        <Paragraph text="Minha jornada profissional também inclui uma passagem pelo Núcleo de Estudos e Pesquisas do Nordeste (NEPEN), onde desenvolvi aplicações web, web services e processos robotizáveis (RPA) para o Grupo Equatorial Energia." />
        <Paragraph text="Sou formado em Ciências da Computação pela Faculdade Pitágoras e continuo aprimorando minhas habilidades com cursos e formação em tecnologias como AWS, Node.js, React e React Native." />
        <Paragraph text="Com um forte conjunto de competências técnicas que abrange tanto o desenvolvimento back-end quanto front-end, estou preparado para enfrentar desafios tecnológicos e contribuir para o sucesso de projetos inovadores. Além disso, mantenho um constante aperfeiçoamento em inglês, o que me permite acompanhar as tendências globais no campo da tecnologia." />
        <Paragraph text="Estou ansioso para aplicar meu conhecimento e experiência em novos projetos emocionantes. Se você procura um desenvolvedor dedicado, apaixonado pela tecnologia e pronto para criar soluções eficazes, estou à disposição para colaborar." />
      </div>
    </div>
  )
}
