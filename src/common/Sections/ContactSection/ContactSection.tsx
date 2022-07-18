import * as React from 'react';
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
    <section>
      <h2>Kontakt</h2>
      {links.map((link, index) => (
        <ContactLink
          key={'contact-link-' + index}
          text={link.text}
          href={link.href}
          icon={link.icon}
        />
      ))}
    </section>
  );
};

export default ContactSection;
