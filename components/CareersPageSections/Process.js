import { Container } from 'react-bootstrap';
import MainHeading from '../CommonComponents/MainHeading.js';

import styles from '../../styles/CareersPageSections/Process.module.scss';

const Process = () => {
  const steps = ['Review', 'Screening', 'Interview', 'Offer'];

  return (
    <section className={styles['Process']}>
      <MainHeading title='Our Recruitment Process' />

      <Container>
        <div className={styles['process-wrapper']}>
          <div className={styles['link-line']}></div>
          {steps.map((item, index) => {
            const num = ++index;

            return (
              <div key={num} className={styles['process-item']}>
                <div className={styles['process-item__number']}>
                  <span>{num}</span>
                </div>
                <div className={styles['process-item__title']}>
                  <h4>{item}</h4>
                </div>
              </div>
            );
          })}

          <div className={styles['process-item']}>
            <div className={styles['process-item__number']}>
              <i className='fas fa-check'></i>
            </div>
            <div className={styles['process-item__title']}>
              <h4>Welcome</h4>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Process;
