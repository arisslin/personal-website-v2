import * as React from 'react';
import Page from '../common/components/Page/page';
import ContactSection from '../common/sections/ContactSection/ContactSection';
import { mockedContactLinks } from '../mocks/mockedContactLinks';

const ContactPage = () => (
  <Page title='Kontakt'>
    <h1>Kontakt</h1>
    <ContactSection links={mockedContactLinks} />
  </Page>
);

export default ContactPage;
