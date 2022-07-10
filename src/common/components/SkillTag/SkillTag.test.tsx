import * as React from 'react';
import { render, screen } from '@testing-library/react';
import SkillTag, { testId } from './SkillTag';
import { doSnapshotTest } from '../../helper/testHelper';

describe('SkillTag', () => {
  const text = 'TypeScript';
  const component = <SkillTag text={text} />;

  it('renders with text', () => {
    render(component);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('does not render if text is an empty string', () => {
    render(<SkillTag text='' />);

    expect(screen.queryByTestId(testId)).not.toBeInTheDocument();
  });

  doSnapshotTest(component);
});
