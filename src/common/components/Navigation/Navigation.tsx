import * as React from 'react';
import { Link } from '../../../types/dataTypes';

export type NavigationProps = {
  links: Link[];
};

const Navigation = ({ links }: NavigationProps) => {
  return (
    <nav data-testid={testId}>
      {links.map((link, index) => (
        <a key={'nav-link-' + index} href={link.href}>
          {link.text}
        </a>
      ))}
    </nav>
  );
};

export const testId = 'navigation';

export default Navigation;
