import * as React from 'react';
import styled from 'styled-components/macro';
import Page from '../common/components/Page/page';
import Title from '../common/components/Title/Title';
import { StaticImage } from 'gatsby-plugin-image';
import { breakpoints } from '../common/styles/layout';
import SkillSection from '../common/sections/SkillSection/SkillSection';
import ContactSection from '../common/sections/ContactSection/ContactSection';
import { mockedSkillTags } from '../mocks/mockedSkillTags';
import { mockedContactLinks } from '../mocks/mockedContactLinks';

const IndexPage = () => {
  const imageSize = 300;

  return (
    <Page title='Home'>
      <Title />
      <Image className='layout-container'>
        <StaticImage
          src='../assets/images/XING_Profilbild.jpg'
          alt='Andreas Rissling'
          width={imageSize}
          height={imageSize}
          quality={100}
          className='home-page__title-image'
        />
      </Image>

      <p className='layout-container'>
        Hallo, ich bin Andreas.
        <br />
        Web-Entwickler, Ingenieur für Medientechnik und Musik Produzent. Auf
        dieser Webseite finden Sie einige Informationen über mich und meine
        Tätigkeit als Entwickler.
      </p>
      <SkillSection tags={mockedSkillTags} />
      <ContactSection links={mockedContactLinks} />
    </Page>
  );
};

const Image = styled.div`
  .home-page__title-image {
    display: block;
    border-radius: 50%;
    margin: 60px auto;
    max-width: 260px;
    z-index: 0;

    @media screen and (min-width: ${breakpoints.small}) {
      max-width: 300px;
    }
  }
`;

export default IndexPage;
