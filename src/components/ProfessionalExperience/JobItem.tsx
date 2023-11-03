import { formatDateToPtBR } from '@/util'
import { Building, CalendarDays, MapPin } from 'lucide-react'

export type Job = {
  id: number
  company: string
  office: string
  workload: 'full time' | 'part time' | 'flex'
  location: string
  startDate: Date
  finalDate?: Date
}

export function JobItem({
  company,
  office,
  workload,
  location,
  startDate,
  finalDate,
}: Job) {
  return (
    <div className="flex flex-col gap-3 border-b border-b-port-gray-300 py-4 last:border-none dark:border-b-port-gray-900">
      <div className="flex items-center justify-between">
        <span className="font-secondary text-xl font-normal text-port-blue-800 dark:text-port-gray-300 lg:text-2xl">
          {office}
        </span>
        <span className="w-24 rounded-full bg-port-green-50 p-2 text-center font-secondary text-xs font-semibold text-port-green-800 dark:bg-port-pink-400 dark:text-white lg:w-36 lg:text-sm">
          {workload}
        </span>
      </div>

      <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-center lg:gap-0">
        <span className="flex items-center gap-2 font-secondary text-sm font-medium text-port-gray-400">
          <Building size={18} />
          {company}
        </span>
        <span className="flex items-center gap-2 font-secondary text-sm font-medium text-port-gray-400 lg:ml-8 lg:mr-auto">
          <MapPin size={18} />
          {location}
        </span>
        <span className="flex items-center gap-2 font-secondary text-sm font-medium text-port-gray-400">
          <CalendarDays size={18} />
          {`${formatDateToPtBR(startDate)} - ${
            finalDate ? formatDateToPtBR(finalDate) : 'atual'
          }`}
        </span>
      </div>
    </div>
  )
}
