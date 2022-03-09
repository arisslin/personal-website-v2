import { createGlobalStyle } from 'styled-components';

export const breakpoints = {
  small: 576,
  medium: 768,
  large: 992,
  extraLarge: 1200,
  wide: 1920,
  ultraWide: 2560,
} as const;

const GlobalLayout = createGlobalStyle`
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default GlobalLayout;
