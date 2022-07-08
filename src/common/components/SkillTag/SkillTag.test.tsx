import * as React from 'react';
import { render, screen } from '@testing-library/react';
import SkillTag from './SkillTag';

describe('SkillTag', () => {
  it('renders with text', () => {
    const text = 'TypeScript';
    const component = <SkillTag text={text} />;

    render(component);

    expect(screen.getByText(text));
  });
});
