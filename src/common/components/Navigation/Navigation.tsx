import * as React from 'react';
import styled from 'styled-components/macro';
import { Link } from '../../../types/dataTypes';

export type NavigationProps = {
  links: Link[];
};

const Navigation = ({ links }: NavigationProps) => {
  return (
    <NavStyled data-testid={testId}>
      <div className='layout-container'>
        {links.map((link, index) => (
          <a key={'nav-link-' + index} href={link.href}>
            {link.text}
          </a>
        ))}
      </div>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  position: sticky;
  top: 0;
  height: 40px;
  background: var(--color-primary);
  z-index: 1;

  .layout-container {
    display: flex;
    align-items: stretch;
    height: 100%;
  }

  a {
    display: flex;
    align-items: center;
    margin-right: 16px;
    color: white;
    text-decoration: none;
  }
`;

export const testId = 'navigation';

export default Navigation;
