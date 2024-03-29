import * as React from 'react';
import styled from 'styled-components/macro';
import ContactLink, {
  ContactLinkProps,
} from '../../components/ContactLink/ContactLink';

export type ContactSectionProps = {
  links: ContactLinkProps[];
};

const ContactSection = ({ links }: ContactSectionProps) => {
  if (links.length === 0) {
    return <></>;
  }

  return (
    <Section>
      {links.map((link, index) => (
        <ContactLink
          key={'contact-link-' + index}
          text={link.text}
          href={link.href}
          icon={link.icon}
        />
      ))}
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 0 auto;
  max-width: calc(300px + 2rem);
  padding-left: 1rem;
  padding-right: 1rem;

  a {
    width: 100%;
  }
`;

export default ContactSection;
