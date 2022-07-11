import * as React from 'react';

type ContactLinkProps = {
  children: React.ReactNode;
  href: string;
};

const ContactLink = ({ children, href }: ContactLinkProps) => {
  return <a href={href}>{children}</a>;
};

export default ContactLink;
