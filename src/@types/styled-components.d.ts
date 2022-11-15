/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import theme from '../styles/theme';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  interface DefaultTheme extends ThemeType {}
}
