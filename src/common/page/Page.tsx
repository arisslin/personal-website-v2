import * as React from 'react';
import GlobalStyles from '../../common/styles';

export type PageProps = {
  children: React.ReactNode;
};

const Page = ({ children }: PageProps) => {
  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  );
};

export default Page;
