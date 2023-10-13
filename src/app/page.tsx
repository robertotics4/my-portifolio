import { Presentation } from '@/components/Presentation'
import { Projects } from '@/components/Projects'
import { TechStack } from '@/components/TechStack'

export default function Home() {
  return (
    <main>
      <Presentation />
      <TechStack />
      <Projects />
    </main>
  )
}
