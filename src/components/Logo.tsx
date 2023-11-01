export function Logo() {
  return (
    <div className="flex flex-col items-center">
      <strong className="bg-gradient-to-r from-port-blue-400 to-port-pink-400 bg-clip-text font-logo-primary text-2xl font-bold text-transparent">
        {'<LROS.tech/>'}
      </strong>
      <span className="font-logo-secondary text-xs font-medium text-port-blue-800 dark:text-port-gray-300">
        SOFTWARE DEVELOPER
      </span>
    </div>
  )
}
