import * as React from 'react';
import GlobalStyles from '../../styles';
import { Helmet } from 'react-helmet';

export type PageProps = {
  children: React.ReactNode;
  title: string;
};

const Page = ({ children, title }: PageProps) => {
  return (
    <>
      <GlobalStyles />
      <Helmet>
        <meta charSet='utf-8' />
        <title>{title}</title>
      </Helmet>
      <main>{children}</main>
    </>
  );
};

export default Page;
