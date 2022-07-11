import * as React from 'react';

type ContactLinkProps = {
  children: React.ReactNode;
  href: string;
};

const ContactLink = ({ children, href }: ContactLinkProps) => (
  <a href={href} rel='noreferrer' target='_blank'>
    {children}
  </a>
);

export default ContactLink;
