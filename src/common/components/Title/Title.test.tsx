import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './Title';
import { doSnapshotTest } from '../../helper/testHelper';
import 'jest-styled-components';

describe('Title', () => {
  it('should render with main and sub title', () => {
    render(<Title />);
    expect(screen.getByText('Andreas Rissling')).toBeInTheDocument();
    expect(screen.getByText('Web Developer')).toBeInTheDocument();
  });

  doSnapshotTest(<Title />, 'default');
});
