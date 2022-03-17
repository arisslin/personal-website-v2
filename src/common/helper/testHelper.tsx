import { cleanup, render } from '@testing-library/react';

/**
 * Does a snapshot test for component it got.
 * @param {JSX.Element} component to creating snapshot for
 * @param {string} variant to create a postfix for the displayed test string
 * @return {void}
 */
export function doSnapshotTest(component: JSX.Element, variant?: string): void {
  const postfix = `${component.type.name as string} ${variant ? variant : ''}`;

  test(`Snapshot test for ${postfix}`, () => {
    const { container } = render(component);

    expect(container).toMatchSnapshot();
    cleanup();
  });
}
