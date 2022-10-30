import MainHeading from '../CommonComponents/MainHeading.js';
import { Container } from 'react-bootstrap';

import styles from '../../styles/CareersPageSections/Culture.module.scss';

const Culture = () => {
  return (
    <section className={styles['culture']}>
      <MainHeading title='Our Culture' />

      <Container>
        <ul className='list-unstyled text-center'>
          <li className='h4 mb-3'>
            We work smart, inspire each other and create unlimited opportunities to grow together
          </li>
          <li className='h4 mb-3'>We appreciate dynamic, creative people who have passion to learn and innovate</li>
          <li className='h4 mb-3'>We pursue big goals by collaboration, innovation and communication</li>
        </ul>
      </Container>
    </section>
  );
};

export default Culture;
