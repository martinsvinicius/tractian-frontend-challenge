import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
});

export const theme = extendTheme({
  colors: {
    gray: {
      50: '#f4f4f5',
    },
    blue: {
      700: '#1e3a8a',
      600: '#224db6',
      500: '#0066ff',
      200: '#60a5fa',
    },
    green: {
      300: '#22c55e',
    },
    yellow: {
      500: '#f9cd49',
    },
  },

  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },

  breakpoints
});
