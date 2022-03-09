import * as React from 'react';
import GlobalBasicStyles from '../basic';
import GlobalColors from './colors';
import GlobalLayoutStyles from './layout';

const GlobalStyles = () => (
  <>
    <GlobalColors />
    <GlobalLayoutStyles />
    <GlobalBasicStyles />
  </>
);

export default GlobalStyles;
