import * as React from 'react';
import styled from 'styled-components/macro';
import GlobalStyles from '../common/styles';
import Title from '../common/components/Title/Title';
import { StaticImage } from 'gatsby-plugin-image';
import { breakpoints } from '../common/styles/layout';
import SkillTag, {
  SkillTagProps,
} from '../common/components/SkillTag/SkillTag';

const skills: SkillTagProps[] = [
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

const IndexPage = () => {
  const imageSize = 300;

  return (
    <>
      <GlobalStyles />
      <Home className='layout-container'>
        <Title />
        <StaticImage
          src='../assets/images/XING_Profilbild.jpg'
          alt='Andreas Rissling'
          width={imageSize}
          height={imageSize}
          quality={100}
          className='home-page__title-image'
        />

        <p>
          Hallo, ich bin Andreas.
          <br />
          Web-Entwickler, Ingenieur für Medientechnik und Musik Produzent. Auf
          dieser Webseite finden Sie einige Informationen über mich und meine
          Tätigkeit als Entwickler.
        </p>
        <section>
          <h2>Skills</h2>
          {skills.map((skill, index) => (
            <SkillTag key={`skill-tag-${index}`} text={skill.text} />
          ))}
        </section>
      </Home>
    </>
  );
};

const Home = styled.main`
  .home-page__title-image {
    display: block;
    border-radius: 50%;
    margin: 60px auto;
    max-width: 260px;

    @media screen and (min-width: ${breakpoints.small}) {
      max-width: 300px;
    }
  }
`;

export default IndexPage;
