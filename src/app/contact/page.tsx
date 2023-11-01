import Image from 'next/image'
import { Title } from '@/components/Title'
import whatsappIcon from '../../../public/assets/icons/whatsapp.svg'
import { Mail, Phone } from 'lucide-react'
import { Subtitle } from '@/components/Subtitle'
import { ContactButton } from '@/components/ContactButton'

export default function ContactPage() {
  return (
    <div className="mt-48 flex flex-col items-center gap-12">
      <Title text="Contatos" />

      <div className="flex flex-col items-center gap-4">
        <span className="flex items-center gap-2 font-secondary text-lg text-port-gray-600 dark:text-port-gray-300">
          <Mail className="h-5 w-5" />
          robertooliveiragp@gmail.com
        </span>

        <span className="flex items-center gap-2 font-secondary text-lg text-port-gray-600 dark:text-port-gray-300">
          <Phone className="h-5 w-5" />
          (98) 98191-8733
        </span>
      </div>

      <div className="flex flex-col items-center gap-4">
        <Subtitle
          text="Mande uma mensagem"
          className="text-lg text-port-gray-600 dark:text-port-gray-300"
        />
        <ContactButton
          title="Whatsapp"
          url="https://wa.me/+559881918733/?text=Olá,%20estou%20entrando%20em%20contato%20via%20seu%20site"
          icon={
            <Image
              src={whatsappIcon}
              alt="Ícone do Whatsapp"
              className="h-8 w-8"
            />
          }
        />
      </div>

      {/* <div className="flex gap-8">
        <ContactButton
          title="E-mail"
          url="mailto:robertooliveiragp@gmail.com?subject=Mensagem Importante - Portifólio LROS.tech"
          icon={<Mail className="h-8 w-8 text-white" />}
        />

        <ContactButton
          title="Whatsapp"
          url="https://wa.me/+559881918733/?text=Olá,%20estou%20entrando%20em%20contato%20via%20seu%20site"
          icon={
            <Image
              src={whatsappIcon}
              alt="Ícone do Whatsapp"
              className="h-8 w-8"
            />
          }
        />
      </div> */}
    </div>
  )
}
