import * as React from 'react';
import GlobalBasicStyles from './basic';
import GlobalColors from './colors';
import GlobalLayoutStyles from './layout';
import GlobalTypography from './typography';

const GlobalStyles = () => (
  <>
    <GlobalColors />
    <GlobalTypography />
    <GlobalLayoutStyles />
    <GlobalBasicStyles />
  </>
);

export default GlobalStyles;
