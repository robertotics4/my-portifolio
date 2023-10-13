import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      width: {
        '84': '21rem',
      },
      height: {
        '84': '21rem',
      },
      colors: {
        'port-gray-600': '#666666',
        'port-blue-400': '#13B0F5',
        'port-pink-400': '#E70FAA',
        'port-blue-800': '#42446E',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
      },
    },
  },
  plugins: [],
}
export default config
