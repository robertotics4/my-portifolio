import { Paragraph } from './Paragraph'
import { Title } from './Title'

export function Resume() {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <Title text="Sobre mim" />
      <div>
        <Paragraph text="Sou um desenvolvedor back-end com mais de 3 anos de experiência na criação de software. Nasci em 1992 e tenho conhecimentos sólidos em Programação Orientada a Objetos, Node.js, Typescript, Javascript, React.js, Java, SpringBoot e bancos de dados relacionais e não relacionais." />
        <Paragraph text="Atualmente, atuo como Desenvolvedor Back-End Sênior, onde trabalho no desenvolvimento de soluções tecnológicas para diversos ramos de negócios, incluindo atacado, varejo, mensageria e chatbots." />
        <Paragraph text="Sou formado em Ciências da Computação e continuo aprimorando minhas habilidades com cursos e formação em tecnologias como AWS, Node.js, React e React Native." />
        <Paragraph text="Com um forte conjunto de competências técnicas que abrange tanto o desenvolvimento back-end quanto front-end, estou preparado para enfrentar desafios tecnológicos e contribuir para o sucesso de projetos inovadores. Além disso, mantenho um constante aperfeiçoamento em inglês, o que me permite acompanhar as tendências globais no campo da tecnologia." />
        <Paragraph text="Estou ansioso para aplicar meu conhecimento e experiência em novos projetos emocionantes. Se você procura um desenvolvedor dedicado, apaixonado pela tecnologia e pronto para criar soluções eficazes, estou à disposição para colaborar." />
      </div>
    </div>
  )
}
