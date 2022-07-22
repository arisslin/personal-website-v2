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
    <Section className='layout-container'>
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
  max-width: calc(${breakpoints.medium} - 4rem);
  margin: 0 auto;
`;

export default SkillSection;
