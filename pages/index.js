import Carousel from '../components/HomePageSections/Carousel.js';
import About from '../components/HomePageSections/About.js';
import Activities from '../components/HomePageSections/Activities.js';
import Projects from '../components/HomePageSections/Projects.js';
import Contact from '../components/HomePageSections/Contact.js';
import Head from 'next/head.js';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title data-i18n='arabBureau'>Arab Bureau</title>
        <meta
          name='keywords'
          content='Arab Bureau for Design and Engineering Consultations Design., egypt, Engineering , Consultations , production , egypt, loading'
        />
        <meta name='author' content='ahmed-m-abdelfatah' />
        <meta name='robots' content='ALL' />
        <meta name='rating' content='General' />
        <meta name='revisit-after' content='30 days' />
        <meta name='classification' content='Business' />
        <meta name='distribution' content='Egypt' />
      </Head>

      <Carousel />
      <About />
      <Activities />
      <Projects />
      <Contact />
    </>
  );
}
