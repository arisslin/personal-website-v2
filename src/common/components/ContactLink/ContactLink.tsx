import * as React from 'react';
import { FaBeer } from 'react-icons/fa';

export type ContactLinkProps = {
  text: string;
  href: string;
};

const ContactLink = ({ text, href }: ContactLinkProps) => (
  <a href={href} rel='noreferrer' target='_blank'>
    <FaBeer />
    {text}
  </a>
);

export default ContactLink;
