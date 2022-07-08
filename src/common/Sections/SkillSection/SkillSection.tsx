import * as React from 'react';
import styled from 'styled-components/macro';
import { breakpoints } from '../../styles/layout';
import SkillTag, { SkillTagProps } from '../../components/SkillTag/SkillTag';

const skillTags: SkillTagProps[] = [
  { text: 'HTML5' },
  { text: 'CSS3' },
  { text: 'JavaScript' },
  { text: 'TypeScript' },
  { text: 'React.jS' },
  { text: 'Gatsby' },
  { text: 'Node.js' },
  { text: 'Express.js' },
  { text: 'Bootstrap' },
  { text: 'Jest' },
  { text: 'Cypress' },
  { text: 'Storybook' },
  { text: 'Git' },
  { text: 'npm' },
  { text: 'agile Softwareentwicklung' },
  { text: 'Software Craftsmanship' },
  { text: 'TypeDoc' },
];

type SkillSectionProps = {
  tags: SkillTagProps[];
};

const SkillSection = ({ tags }: SkillSectionProps) => {
  if (tags.length === 0) {
    return <></>;
  }

  return (
    <SkillSectionStyled>
      <h2>Skills</h2>
      {tags.map((tag, index) => (
        <SkillTag key={`skill-tag-${index}`} text={tag.text} />
      ))}
    </SkillSectionStyled>
  );
};

const SkillSectionStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-width: calc(${breakpoints.medium} - 4rem);
  margin: 0 auto;
`;

export default SkillSection;
export { skillTags };
