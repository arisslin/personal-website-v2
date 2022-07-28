import * as React from 'react';
import styled from 'styled-components/macro';
import { StaticImage } from 'gatsby-plugin-image';
import Page from '../common/components/Page/page';
import { breakpoints } from '../common/styles/layout';

const AboutMePage = () => {
  return (
    <Page title='About me'>
      <h1>Über mich</h1>
      <ArticleOrigin className='layout-container'>
        <p>Moin, ich bin Andreas.</p>

        <p>
          Eigentlich wollte ich nie programmieren da ich es damals tot
          langweilig fand. In der Berufsausbildung und auf der Fachoberschule
          habe ich mich so gut es geht davor gedrückt. Dementsprechend waren
          auch meine Noten. Programmieren liegt mir nicht! Das war mein
          damaliger Glaubenssatz.
        </p>

        <StaticImage
          src='../assets/images/dj2.jpg'
          alt='Andreas an den Turntables'
          quality={100}
          className='article-origin__top-image'
        />

        <p>
          Das änderte sich jedoch während meines Medientechnikstudiums. Hier gab
          es zwei Kurse in Informatik, welche es zu bestehen galt. Beigebracht
          wurden uns die Grundlagen der Programmierung mit C++.
          Objektorientierung. Na, dann viel Spaß. Mein Plan damals war, die
          Kurse einfach nur zu bestehen und dann nie wieder eine Zeile Code zu
          schreiben. Doch anders als meine Lehrer zuvor, vermittelte uns unser
          Professor das Thema Programmierung so, dass ich verstand, was da vor
          sich geht. Schnell merkte ich, dass die Programmieraufgaben mir Spaß
          machten und ich gut darin war diese selbstständig zu lösen. Beide
          Kurse bestand ich ohne Probleme. Daraufhin folgten diverse
          Hochschulprojekte und Praktika, in denen ich meine Kenntnisse
          vertiefen konnte. Microcontroller mit VHDL programmieren? Kein
          Problem! Für eines unserer Projekte lernten mein Kommilitone Sebastian
          und ich C#, was für die nachfolgenden Projekte unsere bevorzugte
          Sprache wurde.
        </p>

        <p>
          In meinem Job nach dem Studium habe ich dann nicht mehr programmieren
          müssen. Nebenbei probierte ich mich in Java und Python aus. Während
          meiner beruflichen Auszeit, fing ich dann an mich mit Webentwicklung
          zu befassen. Für eine Hip-Hop Jam, die wir mit Freunden veranstalten
          wollten, brauchten wir eine Homepage. Etwas HTML, CSS und JavaScript
          kannte ich noch aus dem Studium und aus der Fachoberschule. Und da bin
          ich dann hängen geblieben. Das wollte ich machen! Nur Jobs bekam ich
          keine. Zu wenig Erfahrung, keine Zertifikate, usw. Das übliche halt.
          Ein neuer Plan musste her.
        </p>

        <p>
          In einer Kneipe erzählte mir dann ein Typ von diesem Coding Bootcamp
          aus Hamburg: neuefische. Coding Bootcamps, dass wäre der neue heiße
          Scheiß aus den USA. In 12 Wochen sollte man lernen, wie man
          programmiert und danach findet man einen Job. Er war Konsultant und
          habe bei der Gründung beratend zur Seite gestanden. Er gab mir seine
          Nummer. Wenn ich Interesse habe, solle ich mich melden und er würde
          meinen CV weiterleiten. Und so geschah es dann auch. Coden konnte ich
          ja schon, ich brauchte nur ein Stück Papier, auf dem das auch steht.
          Heute weiß ich, dass mir die Best Practices der Profis und das Wissen
          darüber, wie man in agilen Entwicklerteams arbeitet gefehlt haben.
        </p>

        <p>
          Nach dem Bootcamp fand ich schnell einen Job. Seitdem bin ich als
          glücklicher Webentwickler für ein Hamburger Unternehmen in der
          Musikindustrie tätig. Ich kann also meine Liebe zur Musik und meine
          Leidenschaft für das Programmieren miteinander verknüpfen. Außerdem
          lerne ich jeden Tag etwas Neues dazu und dafür bin ich dankbar.{' '}
        </p>
      </ArticleOrigin>
    </Page>
  );
};

const ArticleOrigin = styled.article`
  .article-origin__top-image {
    display: block;
    grid-area: image;
    margin: 2rem auto;
    max-width: 300px;

    @media screen and (min-width: ${breakpoints.small}) {
      max-width: none;
      width: 350px;
    }

    @media screen and (min-width: 1200px) {
      margin: 3rem auto;
    }
  }
`;

export default AboutMePage;
