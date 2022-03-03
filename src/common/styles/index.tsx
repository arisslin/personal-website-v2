import { createGlobalStyle } from 'styled-components';
import { breakpoints } from './layout';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';

const GlobalStyles = createGlobalStyle`
  :root {
    // --- Colors ---
    --color-dark: #131b20;
    --color-light: #fafafa;

    // --- Typo ---
    font-size: 16px;

    --font-size-base: 16px;

    --font-family-global: 'Open Sans', Helvetica, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: var(--color-light);
    color: var(--color-dark);
    font-family: var(--font-family-global);
  }

  h1 {
    font-size: 2rem; // 32px
  }

  h2 {
    font-size: 1.75rem; // 28px
  }

  h3 {
    font-size: 1.5rem; // 24px
  }

  h4 {
    font-size: 1.25rem; // 20px
  }

  h5 {
    font-size: 1.125rem; // 18px
  }

  h6 {
    font-size: var(--font-size-base);
  }

  p {
    font-size: var(--font-size-base);
  }
`;

export default GlobalStyles;
