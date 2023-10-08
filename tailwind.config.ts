import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
