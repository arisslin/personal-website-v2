import * as React from 'react';

type ContactLinkProps = {
  children?: React.ReactNode;
};

const ContactLink = ({ children }: ContactLinkProps) => {
  return <a href='www.gueteklasse-a.de'>{children}</a>;
};

export default ContactLink;
