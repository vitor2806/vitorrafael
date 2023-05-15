import 'styled-components';
import { darkTheme } from '../styles/theme';

export type Theme = typeof darkTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
