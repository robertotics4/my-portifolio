import { SocialMedia } from './SocialMedia'

export function Footer() {
  return (
    <div className="dark:border-t-port-gray-900 flex flex-col items-center gap-2 border-t border-t-port-gray-600 p-2 pb-4 lg:flex-row lg:place-content-between">
      <SocialMedia />
      <p className="text-center font-secondary text-xs text-port-gray-600 dark:text-port-gray-400 lg:py-4 lg:text-right">
        Desenhado por <strong>Pavan MG</strong> e construído por{' '}
        <strong>robertotics4</strong> com 💙 e muito ☕
      </p>
    </div>
  )
}
