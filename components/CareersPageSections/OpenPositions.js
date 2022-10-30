import MainHeading from '../CommonComponents/MainHeading.js';
import { Container } from 'react-bootstrap';

import styles from '../../styles/CareersPageSections/OpenPositions.module.scss';
import JobCard from '../CommonComponents/JobCard.js';

const OpenPositions = ({ jobList }) => {
  return (
    <section className={styles['open-positions']}>
      <MainHeading description='Open Positions' title='Find your next job' />

      <Container>
        {jobList.length > 0 ? (
          jobList.map(job => <JobCard key={job._id} job={job} />)
        ) : (
          <p className='text-center text-uppercase h3'>No Current open positions</p>
        )}
      </Container>
    </section>
  );
};

export default OpenPositions;
