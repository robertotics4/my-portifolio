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
        'port-gray-300': '#cccccc',
        'port-gray-400': '#A7A7A7',
        'port-gray-600': '#666666',
        'port-blue-400': '#13B0F5',
        'port-pink-400': '#E70FAA',
        'port-blue-800': '#42446E',
        'port-green-50': '#D7FFE0',
        'port-green-800': '#018C0F',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
      },
      fontFamily: {
        'logo-primary': ['"Quicksand", sans-serif'],
        'logo-secondary': ['"Montserrat", sans-serif'],
        primary: ['"DM Sans", sans-serif'],
        secondary: ['"Poppins", sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
