import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import ContactLinkComponent, { ContactLinkProps } from './ContactLink';

export default {
  title: 'Components/ContactLink',
  component: ContactLinkComponent,
  parameters: {
    docs: {
      description: {
        component: getDescription(),
      },
    },
  },
} as Meta;

function getDescription(): string {
  return '<h2>About</h2>' + '<p>' + '' + '</p>';
}

export const ContactLink: Story<ContactLinkProps> = (args) => (
  <ContactLinkComponent href={args.href} text={args.text} />
);
ContactLink.args = {
  text: 'gueteklasse-a.de',
  href: 'https://www.gueteklasse-a.de',
};
