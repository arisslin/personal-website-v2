import { createGlobalStyle } from 'styled-components';
import { breakpoints } from './layout';
import { fontSizesInRem } from './typography';

const GlobalBasicStyles = createGlobalStyle`
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
    width: 100%;
    letter-spacing: 1px;
    text-align: center;
  }

  h1 {
    margin: 3rem 0;
    font-size: ${fontSizesInRem.headingXl}rem;
  }

  h2 {
    margin: 1.75rem 0;
    font-size: ${fontSizesInRem.headingL}rem;
  }

  h3 {
    margin: 1.5rem 0;
    font-size: ${fontSizesInRem.headingM}rem;
  }

  h4 {
    margin: 1.25rem 0;
    font-size: ${fontSizesInRem.headingS}rem;
  }

  h5 {
    margin: 1.125rem 0;
    font-size: ${fontSizesInRem.large}rem;
  }

  h6 {
    margin: 1rem 0;
    font-size: ${fontSizesInRem.base}rem;
  }

  p, ul, ol {
    font-size: ${fontSizesInRem.base}rem;
    line-height: 1.5;
    
    @media screen and (min-width: ${breakpoints.medium}){
      font-size: ${fontSizesInRem.large}rem;
    }
  }

  main {
    padding-bottom: 200px;

    @media screen and (min-width: ${breakpoints.medium}){
      padding-bottom: 300px;
    }
  }

  figcaption {
    font-size: ${fontSizesInRem.extraSmall}rem;
  }
`;

export default GlobalBasicStyles;
