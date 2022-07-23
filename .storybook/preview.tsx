//--- SETUP MUI THEME ---
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import lightThemeOptions from '../styles/themes/lightThemeOptions';
const theme = createTheme(lightThemeOptions);
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
//----------------------

//--- SETUP MSW ---
import { setupWorker } from 'msw';
import { getGroupsMSW } from '../generated/groups/groups.msw';

declare global {
  interface Window {
    msw: any;
  }
}

if (typeof global.process === 'undefined') {
  const worker = setupWorker(...getGroupsMSW());
  worker.start();
  window.msw = { worker };
}
//-----------------

import '../styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
