import * as React from 'react';
import { IconType } from 'react-icons';
import styled from 'styled-components/macro';

export type ContactLinkProps = {
  text: string;
  href: string;
  icon?: IconType;
};

const ContactLink = ({ text, href, icon }: ContactLinkProps) => (
  <Anchor href={href} rel='noreferrer' target='_blank'>
    {icon && icon({})}
    {text}
  </Anchor>
);

const Anchor = styled.a`
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  padding: 10px 12px;
  background-color: var(--color-primary);
  color: var(--color-light);

  &:hover {
    background-color: var(--color-primary-hover);
  }
`;

export default ContactLink;
