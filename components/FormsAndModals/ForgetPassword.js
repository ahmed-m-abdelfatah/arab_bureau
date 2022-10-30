import Link from 'next/link.js';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';

import styles from '../../styles/FormsAndModals/ForgetPassword.module.scss';

const ForgetPassword = () => {
  const handelSubmit = e => {
    e.preventDefault();
  };

  return (
    <section className={styles['forget-password']}>
      <Container className={styles['container']}>
        <h1 className='text-capitalize mb-5 text-center'>Forget Password</h1>

        <Form onSubmit={handelSubmit}>
          <Form.Group className='mb-3'>
            <Form.Control
              type='text'
              placeholder='Your name'
              className='shadow-none'
              name='name'
              autoComplete='off'
              required
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <InputGroup hasValidation>
              <InputGroup.Text className='bg-primary text-white'>@</InputGroup.Text>
              <Form.Control
                type='text'
                placeholder='Username'
                className='shadow-none'
                name='userName'
                autoComplete='off'
                required
              />
            </InputGroup>
          </Form.Group>

          <Button type='submit' className='w-100'>
            Forget Password
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default ForgetPassword;
