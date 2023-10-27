import { SocialMedia } from './SocialMedia'

export function Footer() {
  return (
    <div className="flex place-content-between items-center border-t border-t-port-gray-300">
      <SocialMedia />
      <p className="py-4 text-right font-secondary text-xs text-port-gray-600">
        Desenhado por <strong>Pavan MG</strong> e construído por{' '}
        <strong>robertotics4</strong> com 💙 e muito ☕
      </p>
    </div>
  )
}
