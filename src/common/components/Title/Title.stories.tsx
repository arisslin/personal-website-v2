import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import TitleComponent from './Title';

export default {
  title: 'Components/Title',
  component: TitleComponent,
} as Meta;

export const Title: Story = () => <TitleComponent />;
