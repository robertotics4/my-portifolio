import { SocialMedia } from './SocialMedia'

export function Footer() {
  return (
    <div className="flex flex-col items-center gap-2 border-t border-t-port-gray-300 py-2 lg:flex-row lg:place-content-between">
      <SocialMedia />
      <p className="text-center font-secondary text-xs text-port-gray-600 lg:py-4 lg:text-right">
        Desenhado por <strong>Pavan MG</strong> e construído por{' '}
        <strong>robertotics4</strong> com 💙 e muito ☕
      </p>
    </div>
  )
}
