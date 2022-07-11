import * as React from 'react';
import * as EmailValidator from 'email-validator';

type ContactLinkProps = {
  children: React.ReactNode;
  href: string;
};

const ContactLink = ({ children, href }: ContactLinkProps) => {
  const isEmail = EmailValidator.validate(href);

  return <a href={isEmail ? 'mailto:' + href : href}>{children}</a>;
};

export default ContactLink;
