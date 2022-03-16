import * as React from 'react';
import styled from 'styled-components/macro';

const Title = () => (
  <TitleStyled>
    Andreas Rissling
    <Divider />
    <SubTitle>Web Developer</SubTitle>
  </TitleStyled>
);

const TitleStyled = styled.h1`
  font-size: 1.75rem;
  font-weight: 300;
  letter-spacing: 3px;
  text-align: center;
`;

const Divider = styled.hr`
  margin-top: 0.8rem;
  margin-bottom: 0.5rem;
  border: none;
  height: 1px;
  width: 100px;
  background-color: var(--color-dark);
`;

const SubTitle = styled.span`
  font-size: 1.5rem;
`;

export default Title;
