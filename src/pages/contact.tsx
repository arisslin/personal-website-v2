import * as React from 'react';
import Page from '../common/components/Page/page';
import ContactSection from '../common/sections/ContactSection/ContactSection';
import { mockedContactLinks } from '../mocks/mockedContactLinks';

const ContactPage = () => (
  <Page title='Kontakt'>
    <h1>Kontakt</h1>
    <p className='layout-container'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit neque quos,
      repellendus suscipit consequuntur praesentium sequi pariatur adipisci
      beatae! Veritatis nam dolor dignissimos qui soluta magni assumenda
      cupiditate quam perferendis?
    </p>
    <ContactSection links={mockedContactLinks} />
  </Page>
);

export default ContactPage;
