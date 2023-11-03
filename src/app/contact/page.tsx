import Image from 'next/image'
import { Title } from '@/components/Title'
import whatsappIcon from '../../../public/assets/icons/whatsapp.svg'
import { Mail, Phone } from 'lucide-react'
import { Subtitle } from '@/components/Subtitle'
import { ContactButton } from '@/components/ContactButton'
import { generateWhatsAppLink } from '@/util'

type Contact = {
  id: number
  type: 'mail' | 'phone'
  value: string
}

const contacts: Contact[] = [
  { id: 1, type: 'mail', value: 'robertooliveiragp@gmail.com' },
  { id: 2, type: 'phone', value: '(98) 98191-8733' },
]

export default function ContactPage() {
  const existentPhone = contacts
    .filter((contact) => contact.type === 'phone')
    .pop()

  return (
    <div className="mt-36 flex flex-col items-center justify-center gap-12 lg:mt-48 lg:flex-row lg:gap-24 lg:divide-x-2 lg:divide-port-gray-900">
      <div className="flex flex-col gap-12">
        <Title text="Contatos" />

        <div className="flex flex-col gap-4">
          {contacts.map((contact) => (
            <span
              key={contact.id}
              className="flex items-center gap-2 font-secondary text-lg text-port-gray-600 dark:text-port-gray-300"
            >
              {contact.type === 'mail' ? (
                <Mail className="h-5 w-5" />
              ) : (
                <Phone className="h-5 w-5" />
              )}
              {contact.value}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 lg:pl-24 lg:pt-0">
        <Subtitle
          text="Mande uma mensagem"
          className="text-lg text-port-gray-600 dark:text-port-gray-300"
        />

        {existentPhone && (
          <ContactButton
            title="Whatsapp"
            url={generateWhatsAppLink(
              existentPhone.value,
              'Olá, visitei o seu site e quero falar com você.',
            )}
            icon={
              <Image
                src={whatsappIcon}
                alt="Ícone do Whatsapp"
                className="h-8 w-8"
              />
            }
          />
        )}
      </div>
    </div>
  )
}
