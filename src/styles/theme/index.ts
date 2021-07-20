import { DefaultTheme } from 'styled-components/macro';

export const defaultTheme: DefaultTheme = {
  title: 'default',

  colors: {
    text : {
      primary: '#17171B',
      secondary: '#000',
      white: '#FFF',
    },
    background: {
      primary: '#FFF',
      secondary: '#E2E2E2'
    },
  },
};

export const darkTheme: DefaultTheme = {
  title: 'dark',

  colors: {
    text : {
      primary: 'red',
      secondary: 'black',
      white: 'white',
    },
    background: {
      primary: 'blue',
      secondary: 'orange'
    },
  },
};