import * as React from 'react';
import styled from 'styled-components/macro';
import GlobalStyles from '../common/styles';
import Title from '../common/components/Title/Title';
import { StaticImage } from 'gatsby-plugin-image';
import { breakpoints } from '../common/styles/layout';
import SkillSection, {
  skillTags,
} from '../common/Sections/SkillSection/SkillSection';

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
        <SkillSection tags={skillTags} />
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
