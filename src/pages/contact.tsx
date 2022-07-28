import * as React from 'react';
import styled from 'styled-components/macro';
import Page from '../common/components/Page/page';
import ContactSection from '../common/sections/ContactSection/ContactSection';
import { mockedContactLinks } from '../mocks/mockedContactLinks';

const ContactPage = () => (
  <Page title='Kontakt'>
    <h1>Kontakt</h1>
    <Paragraph className='layout-container'>
      Noch Fragen? Dann schreib mir eine Mail oder besuche mich in den sozialen
      Medien und auf GitHub.
    </Paragraph>
    <ContactSection links={mockedContactLinks} />
  </Page>
);

const Paragraph = styled.p`
  margin-bottom: 2rem;
`;

export default ContactPage;
