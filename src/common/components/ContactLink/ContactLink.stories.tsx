import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import ContactLinkComponent, { ContactLinkProps } from './ContactLink';
import { FaGlobe } from 'react-icons/fa';

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

const text = 'gueteklasse-a.de';
const href = 'https://www.gueteklasse-a.de';

export const withIcon: Story<ContactLinkProps> = (args) => (
  <ContactLinkComponent href={args.href} text={args.text} icon={args.icon} />
);
withIcon.args = {
  text: text,
  href: href,
  icon: FaGlobe,
};

export const withOutIcon: Story<ContactLinkProps> = (args) => (
  <ContactLinkComponent href={args.href} text={args.text} />
);
withOutIcon.args = {
  text: text,
  href: href,
};
