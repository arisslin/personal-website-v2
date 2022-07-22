import * as React from 'react';

export type PageProps = {
  children: React.ReactNode;
};

const Page = ({ children }: PageProps) => {
  return <main>{children}</main>;
};

export default Page;
