import Link from 'next/link.js';
import { Button, Container, Form } from 'react-bootstrap';

import styles from '../../styles/FormsAndModals/ResetPassword.module.scss';

const ResetPasswordForm = () => {
  const handelSubmit = e => {
    e.preventDefault();
  };

  return (
    <section className={styles['reset-password']}>
      <Container className={styles['container']}>
        <h1 className='text-capitalize mb-5 text-center'>Reset Password</h1>

        <Form onSubmit={handelSubmit}>
          <Form.Group className='mb-3'>
            <Form.Control
              type='password'
              placeholder='password'
              className='shadow-none'
              name='password'
              autoComplete='off'
              required
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Control
              type='password'
              placeholder='confirm password'
              className='shadow-none'
              name='cPassword'
              autoComplete='off'
              required
            />
          </Form.Group>

          <Button type='submit' className='w-100'>
            Signup
          </Button>
        </Form>

        <p className='mt-3 text-capitalize'>
          have an admin account{' '}
          <Link href='/admin/login' passHref>
            <a>login</a>
          </Link>
        </p>
      </Container>
    </section>
  );
};

export default ResetPasswordForm;
