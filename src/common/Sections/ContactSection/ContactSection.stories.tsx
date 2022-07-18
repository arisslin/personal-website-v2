import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import ContactSectionComponent, { ContactSectionProps } from './ContactSection';
import { mockedContactLinks } from '../../../mocks/mockedContactLinks';

export default {
  title: 'Sections/ContactSectionComponent',
  component: ContactSectionComponent,
  argTypes: {
    links: {
      description: 'ContactLinks which get rendered inside the section.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: getDescription(),
      },
    },
  },
} as Meta;

export const ContactSection: Story<ContactSectionProps> = (args) => (
  <ContactSectionComponent links={args.links} />
);

ContactSection.args = {
  links: mockedContactLinks,
};

function getDescription(): string {
  return (
    '<h2>About</h2>' +
    '<p>' +
    'The <b>ContactSection</b> got developed in Juli 2022. It renders a headline ' +
    'and some propped <b>ContactLinks</b>.' +
    '</p>'
  );
}
