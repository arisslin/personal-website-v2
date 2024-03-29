import * as React from 'react';
import styled from 'styled-components/macro';
import { breakpoints } from '../../styles/layout';
import SkillTag, { SkillTagProps } from '../../components/SkillTag/SkillTag';

export type SkillSectionProps = {
  tags: SkillTagProps[];
};

const SkillSection = ({ tags }: SkillSectionProps) => {
  if (tags.length === 0) {
    return <></>;
  }

  return (
    <Section>
      <h2>Skills</h2>
      {tags.map((tag, index) => (
        <SkillTag key={`skill-tag-${index}`} text={tag.text} />
      ))}
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-width: calc(${breakpoints.medium} - 2rem);
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export default SkillSection;
