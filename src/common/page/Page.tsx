import * as React from 'react';
import GlobalStyles from '../../common/styles';
import { Helmet } from 'react-helmet';

export type PageProps = {
  children: React.ReactNode;
};

const Page = ({ children }: PageProps) => {
  return (
    <>
      <GlobalStyles />
      <Helmet>
        <meta charSet='utf-8' />
        <title>Andreas Rissling</title>
      </Helmet>
      <main>{children}</main>
    </>
  );
};

export default Page;
