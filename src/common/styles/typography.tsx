import { createGlobalStyle } from 'styled-components';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';

const fontSizeInPx = 16;
const rootFontSizeInRem = 1;

export const fontSizesInRem = {
  root: rootFontSizeInRem,
  base: 17 / fontSizeInPx,
  large: 18 / fontSizeInPx,
  headingS: 20 / fontSizeInPx,
  headingM: 24 / fontSizeInPx,
  headingL: 28 / fontSizeInPx,
  headingXl: 32 / fontSizeInPx,
} as const;

const GlobalTypography = createGlobalStyle`
  :root {
    font-size: ${fontSizeInPx}px;

    --font-family-global: 'Open Sans', Helvetica, sans-serif;
  }`;

export default GlobalTypography;
