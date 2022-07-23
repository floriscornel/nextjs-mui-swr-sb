//--- SETUP MUI THEME ---
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

if (typeof global.process === 'undefined') {
  // MSW をセットアップ
  const worker = setupWorker(...getGroupsMSW());
  // Service Worker を立ち上げる
  worker.start();
  // stories ファイルからアクセスできるように、worker をグローバルに参照できるようにする
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
