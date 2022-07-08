import * as React from 'react';
import styled from 'styled-components/macro';

type SkillTagProps = {
  text: string;
};

const SkillTag = ({ text }: SkillTagProps): JSX.Element => {
  if (!text) {
    return <></>;
  }

  return <SkillTagStyled data-testid={testId}>{text}</SkillTagStyled>;
};

const SkillTagStyled = styled.span`
  border-radius: 3px;
  display: inline-block;
  padding: 10px 12px;
  background-color: var(--color-yo);
  color: var(--color-light);
`;

const testId = 'skill-tag';

export default SkillTag;
export { SkillTagProps, testId };
