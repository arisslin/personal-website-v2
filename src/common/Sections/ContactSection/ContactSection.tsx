import * as React from 'react';
import ContactLink, {
  ContactLinkProps,
} from '../../components/ContactLink/ContactLink';

type ContactSectionProps = {
  links: ContactLinkProps[];
};

const ContactSection = ({ links }: ContactSectionProps) => {
  return (
    <section>
      <h2>Kontakt</h2>
      {links.map((link, index) => (
        <ContactLink
          key={'contact-link-' + index}
          text={link.text}
          href={link.href}
        />
      ))}
    </section>
  );
};

export default ContactSection;
