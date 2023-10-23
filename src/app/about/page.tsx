import { Experience } from '@/components/Experience'
import { Resume } from '@/components/Resume'

export default function AboutPage() {
  return (
    <div className="mt-16 flex max-w-4xl flex-col gap-32 pb-24 pt-12">
      <Resume />
      <Experience />
    </div>
  )
}
