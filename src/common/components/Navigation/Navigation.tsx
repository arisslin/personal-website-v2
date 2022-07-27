import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components/macro';
import { Link as LinkType } from '../../../types/dataTypes';

export type NavigationProps = {
  links: LinkType[];
};

const Navigation = ({ links }: NavigationProps) => {
  return (
    <NavStyled data-testid={testId}>
      <div className='layout-container'>
        {links.map((link, index) => (
          <Link
            key={'nav-link-' + index}
            to={link.href}
            activeClassName='active'
          >
            {link.text}
          </Link>
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
    padding: 0 8px;
    color: white;
    text-decoration: none;
  }

  a.active {
    background: var(--color-light);
    color: var(--color-dark);
  }
`;

export const testId = 'navigation';

export default Navigation;
