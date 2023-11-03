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
        'port-gray-50': '#F1F1F1',
        'port-gray-100': '#D9D9D9',
        'port-gray-300': '#CCCCCC',
        'port-gray-400': '#A7A7A7',
        'port-gray-600': '#666666',
        'port-gray-700': '#363636',
        'port-gray-900': '#3F3F3F',
        'port-black-700': '#191919',
        'port-black-900': '#101010',
        'port-blue-400': '#13B0F5',
        'port-pink-400': '#E70FAA',
        'port-blue-800': '#42446E',
        'port-green-50': '#D7FFE0',
        'port-green-600': '#04C418',
        'port-green-800': '#018C0F',
        'port-green-850': '#005C4B',
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
