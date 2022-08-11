import * as React from 'react';
import styled from 'styled-components/macro';
import Layout from '../common/components/Layout/Layout';
import ContactSection from '../common/sections/ContactSection/ContactSection';
import { mockedContactLinks } from '../mocks/mockedContactLinks';

const ContactPage = () => (
  <Layout title='Kontakt'>
    <h1>Kontakt</h1>
    <Paragraph className='layout-container'>
      Noch Fragen? Dann schreib mir eine Mail oder besuche mich in den sozialen
      Medien und auf GitHub.
    </Paragraph>
    <ContactSection links={mockedContactLinks} />
  </Layout>
);

const Paragraph = styled.p`
  margin-bottom: 2rem;
`;

export default ContactPage;
