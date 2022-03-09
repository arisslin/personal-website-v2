import { createGlobalStyle } from 'styled-components';

export const breakpoints = {
  small: '576px',
  medium: '768px',
  large: '992px',
  wide: '1920px',
  ultraWide: '2560px',
} as const;

const maxContainerWidth = '1200px';

const GlobalLayout = createGlobalStyle`
  .layout-container {
    margin: 0 auto;
    max-width: ${maxContainerWidth};
    padding-left: 1rem;
    padding-right: 1rem;

    @media screen and (min-width: ${breakpoints.medium}){
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`;

export default GlobalLayout;
