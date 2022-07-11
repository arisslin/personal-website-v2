import * as React from 'react';
import * as EmailValidator from 'email-validator';

type ContactLinkProps = {
  children: React.ReactNode;
  href: string;
};

const ContactLink = ({ children, href }: ContactLinkProps) => {
  return (
    <a href={href} rel='noreferrer' target='_blank'>
      {children}
    </a>
  );
};

export default ContactLink;
