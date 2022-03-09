import { createGlobalStyle } from 'styled-components';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';

const GlobalBasicStyles = createGlobalStyle`
  :root {
    // --- Colors ---
    --color-dark: #131b20;
    --color-light: #fafafa;

    // --- Typo ---
    font-size: 16px;

    --font-size-base: 1rem;

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
    font-weight: 300;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    letter-spacing: 1px;
  }

  h1, 
  h2,
  h3 {
    text-transform: uppercase;
  }

  h1 {
    margin: 2rem 0;
    font-size: 2rem; // 32px
  }

  h2 {
    margin: 1.75rem 0;
    font-size: 1.75rem; // 28px
  }

  h3 {
    margin: 1.5rem 0;
    font-size: 1.5rem; // 24px
  }

  h4 {
    margin: 1.25rem 0;
    font-size: 1.25rem; // 20px
  }

  h5 {
    margin: 1.125rem 0;
    font-size: 1.125rem; // 18px
  }

  h6 {
    margin: 1rem 0;
    font-size: var(--font-size-base);
  }
`;

export default GlobalBasicStyles;
