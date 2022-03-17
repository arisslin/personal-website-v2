import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import TitleComponent from './Title';

export default {
  title: 'Components/Title',
  component: TitleComponent,
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
    'The <b>Title</b> component got developed in March 2022. It shows the' +
    'title of the entire website. It can be used on every page of the' +
    "website but it's mainly but it was designed to be displayed on the " +
    'home page.' +
    '</p>'
  );
}

export const Title: Story = () => <TitleComponent />;
