'use client'

import { ThemeProvider } from 'styled-components';

import theme from "../themes/default";
import GlobalStyles from './globals';

// console.log(theme)

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;