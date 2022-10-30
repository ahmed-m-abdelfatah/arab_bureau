import Link from 'next/link.js';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext.js';
import styles from '../../styles/AdminPageSections/AddCareerAdmin.module.scss';
import OpenPositionsAdmin from './OpenPositionsAdmin.js';

const AddCareerAdmin = ({ jobList }) => {
  const { adminData } = useAuth();

  return (
    <section className={styles['add-career']}>
      <Container className='text-center text-capitalize'>
        <h1 className='text-capitalize mb-0'>Admin Page</h1>
        <h3 className='text-capitalize mb-3'>
          welcome: <span className='fw-bold'>{adminData.name}</span>
        </h3>
        <div className='mb-4'>
          <Link href='/' passHref>
            <a target='_blank' className='text-capitalize'>
              got to home page
            </a>
          </Link>
        </div>

        <OpenPositionsAdmin jobList={jobList} />
      </Container>
    </section>
  );
};

export default AddCareerAdmin;
