import Image from 'next/image'
import { Title } from '@/components/Title'
import whatsappIcon from '../../../public/assets/icons/whatsapp.svg'
import { Mail } from 'lucide-react'
import { ContactButton } from '@/components/ContactButton'

export default function ContactPage() {
  return (
    <div className="mt-40 flex flex-col gap-8">
      <Title text="Entre em contato comigo:" />

      <div className="flex gap-8">
        <ContactButton
          title="E-mail"
          url="mailto:robertooliveiragp@gmail.com?subject=Mensagem Importante - Portifólio LROS.tech"
          gradientDirection="tr"
          icon={<Mail className="h-8 w-8 text-white" />}
        />

        <ContactButton
          title="Whatsapp"
          url="https://wa.me/+559881918733/?text=Olá,%20estou%20entrando%20em%20contato%20via%20seu%20site"
          gradientDirection="tl"
          icon={
            <Image
              src={whatsappIcon}
              alt="Ícone do Whatsapp"
              className="h-8 w-8"
            />
          }
        />
      </div>
    </div>
  )
}
