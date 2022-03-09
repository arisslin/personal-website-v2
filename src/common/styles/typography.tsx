import { createGlobalStyle } from 'styled-components';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';

const GlobalTypography = createGlobalStyle`
  :root {
    font-size: 16px;

    --font-size-base: 1rem;

    --font-family-global: 'Open Sans', Helvetica, sans-serif;
  }`;

export default GlobalTypography;
