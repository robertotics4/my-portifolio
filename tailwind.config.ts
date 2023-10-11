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
    },
  },
  plugins: [],
}
export default config
