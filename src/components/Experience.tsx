import { Building, CalendarDays, MapPin } from 'lucide-react'
import { Title } from './Title'
import { formatDateToPtBr } from '@/util/formatDateToPtBR'

type WorkProps = {
  company: string
  office: string
  workload: 'full time' | 'part time' | 'flex'
  location: string
  startDate: string
  finalDate?: string
}

function Work({
  company,
  office,
  workload,
  location,
  startDate,
  finalDate,
}: WorkProps) {
  return (
    <div className="flex flex-col gap-3 border-b border-b-port-gray-300 py-4 last:border-none">
      <div className="flex items-center justify-between">
        <span className="font-secondary text-xl font-normal text-port-blue-800 lg:text-2xl">
          {office}
        </span>
        <span className="w-24 rounded-full bg-port-green-50 p-2 text-center font-secondary text-xs font-semibold text-port-green-800 lg:w-36 lg:text-sm">
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
          {`${startDate} - ${finalDate || 'atual'}`}
        </span>
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <div className="flex flex-col gap-8">
      <Title text="Experiência Profissional" />

      <div className="flex flex-col gap-10">
        <Work
          company="PULSE - Grupo Mateus"
          office="Backend Developer Senior"
          location="Remoto | São Luis - Maranhão"
          workload="full time"
          startDate={formatDateToPtBr(
            new Date(
              'Wed Jun 01 2022 00:00:00 GMT-0300 (Horário Padrão de Brasília)',
            ),
          )}
        />
        <Work
          company="MKOM Soluções Tecnológicas"
          office="Backend Developer Pleno"
          location="Remoto"
          workload="flex"
          startDate={formatDateToPtBr(
            new Date(
              'Thu Dec 01 2022 00:00:00 GMT-0300 (Horário Padrão de Brasília)',
            ),
          )}
        />
        <Work
          company="Instituto Equatorial"
          office="Full Stack Developer Pleno"
          location="Remoto"
          workload="flex"
          startDate={formatDateToPtBr(
            new Date(
              'Thu Dec 01 2022 00:00:00 GMT-0300 (Horário Padrão de Brasília)',
            ),
          )}
        />

        <Work
          company="Núcleo de Estudos e Pesquisas do Nordeste"
          office="Full Stack Developer Pleno"
          location="Remoto"
          workload="flex"
          startDate={formatDateToPtBr(
            new Date(
              'Thu Dec 01 2022 00:00:00 GMT-0300 (Horário Padrão de Brasília)',
            ),
          )}
        />
      </div>
    </div>
  )
}
