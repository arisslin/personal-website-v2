import * as React from 'react';
import GlobalStyles from '../../styles';
import { Helmet } from 'react-helmet';
import Navigation from '../Navigation/Navigation';
import { mockedNavigationLinks } from '../../../mocks/mockedNavigationLinks';
import { useSiteMetaData } from '../../hooks/queryHooks';

export type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

const Layout = ({ children, title }: LayoutProps) => {
  const { description } = useSiteMetaData();

  return (
    <>
      <GlobalStyles />
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='description' content={description} />
        <title>{title}</title>
      </Helmet>
      <Navigation links={mockedNavigationLinks} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
