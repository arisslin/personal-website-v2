import { createGlobalStyle } from 'styled-components';
import '@fontsource/open-sans';

const GlobalStyles = createGlobalStyle`
  :root {
    // Colors
    --color-dark: #131b20;
    --color-light: #fafafa;

    // Typo
    --font-family-global: 'Open Sans', Helvetica, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #fafafa;
    font-family: var(--font-family-global);
  }

  p {
    font-size: 1rem;
  }
`;

export default GlobalStyles;
