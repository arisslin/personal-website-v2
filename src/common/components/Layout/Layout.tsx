import * as React from 'react';
import GlobalStyles from '../../styles';
import { Helmet } from 'react-helmet';
import Navigation from '../Navigation/Navigation';
import { mockedNavigationLinks } from '../../../mocks/mockedNavigationLinks';

export type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <GlobalStyles />
      <Helmet>
        <meta charSet='utf-8' />
        <title>{title}</title>
      </Helmet>
      <Navigation links={mockedNavigationLinks} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
