import * as React from 'react';
import styled from 'styled-components/macro';
import { breakpoints } from '../../styles/layout';

const Title = () => (
  <TitleStyled>
    Andreas Rissling
    <hr />
    <span>Web Developer</span>
  </TitleStyled>
);

const TitleStyled = styled.h1`
  margin-top: 50px;
  font-size: 1.75rem;
  font-weight: 300;
  letter-spacing: 3px;
  text-align: center;

  @media screen and (min-width: ${breakpoints.medium}) {
    margin-top: 70px;
    font-size: 2rem;
  }

  hr {
    margin-top: 0.8rem;
    margin-bottom: 0.5rem;
    border: none;
    height: 1px;
    width: 100px;
    background-color: var(--color-dark);

    @media screen and (min-width: ${breakpoints.medium}) {
      width: 110px;
    }
  }

  span {
    font-size: 1.5rem;

    @media screen and (min-width: ${breakpoints.medium}) {
      font-size: 1.75rem;
    }
  }
`;

export default Title;
