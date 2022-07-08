import * as React from 'react';
import styled from 'styled-components/macro';

type SkillTagProps = {
  text: string;
};

const SkillTag = ({ text }: SkillTagProps) => (
  <SkillTagStyled>{text}</SkillTagStyled>
);

const SkillTagStyled = styled.span`
  background-color: var(--color-yo);
  border-radius: 3px;
  color: var(--color-light);
  padding: 10px 12px;
`;

export default SkillTag;
