import { Experience } from '@/components/Experience'
import { Resume } from '@/components/Resume'

export default function AboutPage() {
  return (
    <div className="mt-16 flex flex-col gap-12 py-12">
      <Resume />
      <Experience />
    </div>
  )
}
