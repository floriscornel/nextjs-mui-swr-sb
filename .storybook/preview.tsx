import { createTheme, ThemeProvider } from '@mui/material';

import '../styles/globals.css';
import lightThemeOptions from '../styles/themes/lightThemeOptions';

const theme = createTheme(lightThemeOptions);

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
