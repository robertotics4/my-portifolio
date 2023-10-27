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
    <div className="flex flex-col gap-3 border-b border-b-port-gray-300 p-4 last:border-none">
      <div className="flex items-center justify-between">
        <span className="font-secondary text-2xl font-normal text-port-blue-800">
          {office}
        </span>
        <span className="rounded-full bg-port-green-50 px-8 py-2 font-secondary text-sm font-semibold text-port-green-800">
          {workload}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-6">
          <span className="flex items-center gap-2 font-secondary text-sm font-medium text-port-gray-400">
            <Building size={18} />
            {company}
          </span>
          <span className="flex items-center gap-2 font-secondary text-sm font-medium text-port-gray-400">
            <MapPin size={18} />
            {location}
          </span>
        </div>
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
