import * as React from 'react';

type SkillTagProps = {
  text: string;
};

const SkillTag = ({ text }: SkillTagProps) => <span>{text}</span>;

export default SkillTag;
