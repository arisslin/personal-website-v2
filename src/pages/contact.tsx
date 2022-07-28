import * as React from 'react';
import Page from '../common/components/Page/page';
import ContactSection from '../common/sections/ContactSection/ContactSection';
import { mockedContactLinks } from '../mocks/mockedContactLinks';

const ContactPage = () => (
  <Page title='Kontakt'>
    <h1>Kontakt</h1>
    <p className='layout-container'>
      Noch Fragen? Dann schreib mir eine Mail oder besuche mich in den sozialen
      Medien und auf GitHub.
    </p>
    <ContactSection links={mockedContactLinks} />
  </Page>
);

export default ContactPage;
