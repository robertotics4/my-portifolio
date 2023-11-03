import { Title } from '../Title'
import { Job, JobItem } from './JobItem'

type ProfessionalExperienceProps = {
  jobs: Job[]
}

export function ProfessionalExperience({ jobs }: ProfessionalExperienceProps) {
  return (
    <div className="flex flex-col gap-8">
      <Title text="Experiência Profissional" />

      <div className="flex flex-col gap-10">
        {jobs.map((job) => (
          <JobItem key={job.id} {...job} />
        ))}
      </div>
    </div>
  )
}
