import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import ContactLinkComponent, { ContactLinkProps } from './ContactLink';
import { FaGlobe } from 'react-icons/fa';

export default {
  title: 'Components/ContactLink',
  component: ContactLinkComponent,
  argTypes: {
    text: {
      description: 'Text which get displayed inside the tag.',
    },
    href: {
      description: 'Link to the ressource.',
    },
    icon: {
      description: 'Optional icon.',
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

function getDescription(): string {
  return (
    '<h2>About</h2>' +
    '<p>' +
    'The <b>ContactLink</b> was developed in Juli 2022. It is a link to an ' +
    'external contact ressource like a website, phone number or eMail adress.' +
    '</p>'
  );
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
