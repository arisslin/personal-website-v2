import { cleanup, fireEvent, render } from '@testing-library/react';

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

/**
 * Fires an click event with 'fireEvent' from '@testing-library/react' on an
 * element.
 * @param {HTMLElement} element to fire click on.
 * @param {boolean} bubbles attribute of 'MouseEvent'.
 * @param {boolean} cancelable attribute of 'MouseEvent'.
 * @return {void}
 */
export function fireClickEvent(
  element: Element,
  bubbles: boolean,
  cancelable: boolean
) {
  fireEvent(element, new MouseEvent('click', { bubbles, cancelable }));
}
