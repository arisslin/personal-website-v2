import * as React from 'react';

export type ContactLinkProps = {
  text: string;
  href: string;
};

const ContactLink = ({ text, href }: ContactLinkProps) => (
  <a href={href} rel='noreferrer' target='_blank'>
    {text}
  </a>
);

export default ContactLink;
