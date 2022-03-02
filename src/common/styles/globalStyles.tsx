import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    // Colors
    --color-dark: #131b20;
    --color-light: #fafafa;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #fafafa;
  }
`;

export default GlobalStyles;
