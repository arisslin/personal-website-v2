import * as React from 'react';
import GlobalStyles from '../common/styles/globalStyles';

const IndexPage = () => {
  return (
    <main>
      <GlobalStyles />
      <h1>This is a headline h1!</h1>
      <h2>This is a headline h2!</h2>
      <h3>This is a headline h3!</h3>
      <h4>This is a headline h4!</h4>
      <h5>This is a headline h5!</h5>
      <h6>This is a headline h6!</h6>

      <p>
        Velit nulla deserunt sit non non magna amet. Enim reprehenderit ad ad
        esse dolore Lorem occaecat aliqua magna laboris. Do deserunt velit esse
        velit ullamco Lorem veniam cupidatat velit incididunt. Non ad laborum
        fugiat nostrud ut sit sunt velit sint ipsum. Officia quis nulla
        consectetur mollit ex anim. Minim fugiat commodo tempor aliqua sunt
        laboris exercitation et non adipisicing excepteur velit et. Aliquip anim
        duis et cupidatat elit quis duis exercitation quis minim dolore fugiat
        commodo amet.
      </p>

      <code>
        Laboris laborum do nisi adipisicing occaecat veniam sit et exercitation.
      </code>

      <pre>Ex non Lorem do commodo tempor nulla.</pre>

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
          Culpa ex officia eu pariatur incididunt quis aliquip enim qui ea velit
          est.
        </li>
        <li>Nulla anim mollit consectetur Lorem veniam fugiat.</li>
        <li>Ad nisi sit non sint.</li>
      </ol>
    </main>
  );
};

export default IndexPage;
