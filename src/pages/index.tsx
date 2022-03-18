import * as React from 'react';
import styled from 'styled-components/macro';
import GlobalStyles from '../common/styles';
import Title from '../common/components/Title/Title';
import { StaticImage } from 'gatsby-plugin-image';
import { breakpoints } from '../common/styles/layout';

const IndexPage = () => {
  const imageSize = 300;

  return (
    <>
      <GlobalStyles />
      <Home className='layout-container'>
        <Title />
        <StaticImage
          src='../images/XING_Profilbild.jpg'
          alt='Andreas Rissling'
          width={imageSize}
          height={imageSize}
          quality={100}
          className='home-page__title-image'
        />

        <h1>This is a headline h1!</h1>

        <p>
          Velit nulla deserunt sit non non magna amet. Enim reprehenderit ad ad
          esse dolore Lorem occaecat aliqua magna laboris. Do deserunt velit
          esse velit ullamco Lorem veniam cupidatat velit incididunt. Non ad
          laborum fugiat nostrud ut sit sunt velit sint ipsum. Officia quis
          nulla consectetur mollit ex anim.
        </p>

        <h2>This is a headline h2!</h2>

        <p>
          Velit nulla deserunt sit non non magna amet. Enim reprehenderit ad ad
          esse dolore Lorem occaecat aliqua magna laboris. Do deserunt velit
          esse velit ullamco Lorem veniam cupidatat velit incididunt. Non ad
          laborum fugiat nostrud ut sit sunt velit sint ipsum. Officia quis
          nulla consectetur mollit ex anim. Minim fugiat commodo tempor aliqua
          sunt laboris exercitation et non adipisicing excepteur velit et.
          Aliquip anim duis et cupidatat elit quis duis exercitation quis minim
          dolore fugiat commodo amet.
        </p>

        <p>
          Velit nulla deserunt sit non non magna amet. Enim reprehenderit ad ad
          esse dolore Lorem occaecat aliqua magna laboris. Do deserunt velit
          esse velit ullamco Lorem veniam cupidatat velit incididunt. Non ad
          laborum fugiat nostrud ut sit sunt velit sint ipsum. Officia quis
          nulla consectetur mollit ex anim.
        </p>

        <h3>This is a headline h3!</h3>

        <p>
          Velit nulla deserunt sit non non magna amet. Enim reprehenderit ad ad
          esse dolore Lorem occaecat aliqua magna laboris. Do deserunt velit
          esse velit ullamco Lorem veniam cupidatat velit incididunt. Non ad
          laborum fugiat nostrud ut sit sunt velit sint ipsum. Officia quis
          nulla consectetur mollit ex anim. Minim fugiat commodo tempor aliqua
          sunt laboris exercitation et non adipisicing excepteur velit et.
          Aliquip anim duis et cupidatat elit quis duis exercitation quis minim
          dolore fugiat commodo amet.
        </p>

        <h4>This is a headline h4!</h4>

        <p>
          Velit nulla deserunt sit non non magna amet. Enim reprehenderit ad ad
          esse dolore Lorem occaecat aliqua magna laboris. Do deserunt velit
          esse velit ullamco Lorem veniam cupidatat velit incididunt. Non ad
          laborum fugiat nostrud ut sit sunt velit sint ipsum. Officia quis
          nulla consectetur mollit ex anim. Minim fugiat commodo tempor aliqua
          sunt laboris exercitation et non adipisicing excepteur velit et.
          Aliquip anim duis et cupidatat elit quis duis exercitation quis minim
          dolore fugiat commodo amet.
        </p>

        <h5>This is a headline h5!</h5>

        <p>
          Velit nulla deserunt sit non non magna amet. Enim reprehenderit ad ad
          esse dolore Lorem occaecat aliqua magna laboris. Do deserunt velit
          esse velit ullamco Lorem veniam cupidatat velit incididunt.
        </p>

        <p>
          Velit nulla deserunt sit non non magna amet. Enim reprehenderit ad ad
          esse dolore Lorem occaecat aliqua magna laboris. Do deserunt velit
          esse velit ullamco Lorem veniam cupidatat velit incididunt. Non ad
          laborum fugiat nostrud ut sit sunt velit sint ipsum. Officia quis
          nulla consectetur mollit ex anim. Minim fugiat commodo tempor aliqua
          sunt laboris exercitation et non adipisicing excepteur velit et.
          Aliquip anim duis et cupidatat elit quis duis exercitation quis minim
          dolore fugiat commodo amet.
        </p>

        <h6>This is a headline h6!</h6>

        <p>
          Velit nulla deserunt sit non non magna amet. Enim reprehenderit ad ad
          esse dolore Lorem occaecat aliqua magna laboris. Do deserunt velit
          esse velit ullamco Lorem veniam cupidatat velit incididunt. Non ad
          laborum fugiat nostrud ut sit sunt velit sint ipsum. Officia quis
          nulla consectetur mollit ex anim. Minim fugiat commodo tempor aliqua
          sunt laboris exercitation et non adipisicing excepteur velit et.
          Aliquip anim duis et cupidatat elit quis duis exercitation quis minim
          dolore fugiat commodo amet.
        </p>

        <p>
          Velit nulla deserunt sit non non magna amet. Enim reprehenderit ad ad
          esse dolore Lorem occaecat aliqua magna laboris. Do deserunt velit
          esse velit ullamco Lorem veniam cupidatat velit incididunt. Non ad
          laborum fugiat nostrud ut sit sunt velit sint ipsum. Officia quis
          nulla consectetur mollit ex anim. Minim fugiat commodo tempor aliqua
          sunt laboris exercitation et non adipisicing excepteur velit et.
          Aliquip anim duis et cupidatat elit quis duis exercitation quis minim
          dolore fugiat commodo amet.
        </p>

        <ul>
          <li>Deserunt mollit amet in nisi non.</li>
          <li>
            Excepteur proident tempor cupidatat sunt proident excepteur eu Lorem
            ad aliqua pariatur pariatur ex officia.
          </li>
          <li>
            Consectetur aute consectetur ut minim incididunt irure ipsum cillum.
          </li>
          <li>
            Excepteur ea esse aliquip proident id nostrud mollit in ex labore do
            est pariatur.
          </li>
        </ul>

        <ol>
          <li>
            Excepteur elit eu exercitation eiusmod qui proident voluptate fugiat
            consequat irure.
          </li>
          <li>
            Culpa ex officia eu pariatur incididunt quis aliquip enim qui ea
            velit est.
          </li>
          <li>Nulla anim mollit consectetur Lorem veniam fugiat.</li>
          <li>Ad nisi sit non sint.</li>
        </ol>
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
