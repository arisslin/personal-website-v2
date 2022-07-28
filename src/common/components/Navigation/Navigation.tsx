import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components/macro';
import { Link as LinkType } from '../../../types/dataTypes';
import { FaBars } from 'react-icons/fa';

export type NavigationProps = {
  links: LinkType[];
};

const Navigation = ({ links }: NavigationProps) => {
  const [isHidden, setIsHidden] = React.useState(true);

  return (
    <NavStyled data-testid={testId} isHidden={isHidden}>
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
        <FaBars
          className='navigation__menu-icon'
          onClick={() => setIsHidden(!isHidden)}
        />
      </div>
    </NavStyled>
  );
};

type NavStyledProps = {
  isHidden: boolean;
};

const NavStyled = styled.nav<NavStyledProps>`
  position: absolute;
  width: 100%;
  top: 0;
  background: var(--color-primary);
  z-index: 1;

  .layout-container {
    position: relative;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 8px;
    height: 40px;
    color: var(--color-light);
    text-decoration: none;
  }

  a:not(:first-child) {
    display: ${(props) => (props.isHidden ? 'none' : 'flex')};
  }

  .navigation__menu-icon {
    box-sizing: content-box;
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 1rem;
    padding: 0 8px;
    height: 40px;
    color: var(--color-light);
  }

  .navigation__menu-icon:hover {
    cursor: pointer;
  }

  /* a:hover {
    background-color: var(--color-primary-hover);
  } */

  /* a.active {
    background: var(--color-light);
    color: var(--color-dark);
  } */
`;

export const testId = 'navigation';

export default Navigation;
