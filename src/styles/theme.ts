import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#181B23',
      '800': '#1F2029',
      '700': '#353646',
      '600': '#4B4D63',
      '500': '#616480',
      '400': '#797D9A',
      '300': '#9699B0',
      '200': '#B3B5C6',
      '100': '#D1D2DC',
      '50': '#EEEEF2',
    },
    pink: {
      '400': '#FF79C6',
    },
    cyan: {
      '400': '#78D1E1',
    },
    purple: {
      '400': '#988BC7',
      '800': '#1A1626',
      '900': '#120F1D',
    },
    green: {
      '400': '#67E480',
    },
    red: {
      '400': '#E96379',
    },
    yellow: {
      '400': '#E7DE79',
    },
  },
  fonts: {
    heading: 'Jetbrains Mono',
    body: 'Jetbrains Mono',
  },
  styles: {
    global: {
      body: {
        bg: 'purple.800',
        color: 'gray.50',
      },
    },
  },
});
