import * as React from 'react';

type ContactLinkProps = {
  children?: React.ReactNode;
};

const ContactLink = ({ children }: ContactLinkProps) => {
  return <div>{children}</div>;
};

export default ContactLink;
