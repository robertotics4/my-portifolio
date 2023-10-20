import { CalendarDays, MapPin } from 'lucide-react'
import { Title } from './Title'

type WorkProps = {
  office: string
  workload: 'full time' | 'part time'
  location: string
  startDate: Date
  finalDate?: Date
}

function Work({ office, workload, location, startDate, finalDate }: WorkProps) {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <strong className="text-3xl font-normal text-port-blue-800">
          {office}
        </strong>
        <span className="bg-port-green-50 text-port-green-800 rounded-full px-8 py-2">
          {workload}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-port-gray-400 flex items-center gap-2">
          <MapPin size={20} />
          {location}
        </span>
        <span className="text-port-gray-400 flex items-center gap-2">
          <CalendarDays size={20} />
          {`${startDate.toISOString()} - ${
            finalDate?.toISOString() || 'atual'
          }`}
        </span>
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <div className="flex flex-col gap-8">
      <Title text="Experiência" />

      <div className="flex flex-col gap-10">
        <Work
          office="Software developer"
          location="São Luis - Maranhão"
          workload="full time"
          startDate={new Date()}
        />
        <Work
          office="Software developer"
          location="São Luis - Maranhão"
          workload="full time"
          startDate={new Date()}
        />
        <Work
          office="Software developer"
          location="São Luis - Maranhão"
          workload="full time"
          startDate={new Date()}
        />
        <Work
          office="Software developer"
          location="São Luis - Maranhão"
          workload="full time"
          startDate={new Date()}
        />
      </div>
    </div>
  )
}
