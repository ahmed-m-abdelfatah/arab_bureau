import Link from 'next/link.js';
import { useRouter } from 'next/router.js';
import { useState } from 'react';
import { Button, Container, Form, InputGroup, Spinner } from 'react-bootstrap';
import axiosRequest from '../../utils/axiosRequest.js';
import axiosServiceObj from '../../utils/axiosServiceObjects';
import validation from '../../utils/validation.js';
import validators from '../../utils/validation_schema.js';

import styles from '../../styles/FormsAndModals/SignUpForm.module.scss';

const SignUpForm = () => {
  const [user, setUser] = useState({ name: '', userName: '', password: '', cPassword: '' });
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const router = useRouter();

  const clearErrors = () => {
    setIsError(false);
    setErrorMsg(null);
  };

  const handelChange = e => {
    isError && clearErrors();
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    clearErrors();

    // add @ infront of userName
    const editedUser = { ...user, userName: `@${user.userName}` };

    //validation
    const validationErrors = validation(editedUser, validators.signup);

    if (validationErrors?.length) {
      // console.log('from front end');
      const errorsMsg = validationErrors.map(error => error.msg);
      setIsError(true);
      setErrorMsg(errorsMsg);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } else {
      // console.log('from back end');
      // call the backend
      const res = await axiosRequest(axiosServiceObj.signup(editedUser));

      // handel req errors
      if (res?.response?.status === 405) {
        setIsError(true);
        setErrorMsg([res.response.data.message]);
        setIsLoading(false);
      }

      if (res?.response?.status === 422) {
        const errors = res.response.data.err;
        const errorsMsg = errors.map(error => error.msg);
        setIsError(true);
        setErrorMsg(errorsMsg);
        setIsLoading(false);
      }

      // go to login page
      res?.status === 201 && router.push('/admin/login');

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <section className={styles['signup']}>
      <Container className={styles['container']}>
        <h1 className='text-capitalize mb-5 text-center'>Signup</h1>

        {isError && (
          <ul className='list-unstyled w-75'>
            {errorMsg.map((error, index) => (
              <li className='text-bg-danger mb-3 p-3' key={index}>
                {error}
              </li>
            ))}
          </ul>
        )}

        <Form className='w-75' onSubmit={handelSubmit}>
          <Form.Group className='mb-3'>
            <Form.Control
              type='text'
              placeholder='Your name'
              className='shadow-none'
              name='name'
              autoComplete='off'
              onChange={handelChange}
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
                onChange={handelChange}
                required
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Control
              type='password'
              placeholder='password'
              className='shadow-none'
              name='password'
              autoComplete='off'
              onChange={handelChange}
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
              onChange={handelChange}
              required
            />
          </Form.Group>

          <Button type='submit' className='w-100'>
            {isLoading ? (
              <Spinner animation='border' size='sm'>
                <span className='visually-hidden'>Loading...</span>
              </Spinner>
            ) : (
              'Signup'
            )}
          </Button>
        </Form>

        <p className='mt-3 text-capitalize'>
          have an admin account{' '}
          <Link href='/admin/login' passHref>
            <a>login</a>
          </Link>
        </p>

        <Link href='/' passHref>
          <a className='text-capitalize'>got to home page</a>
        </Link>
      </Container>
    </section>
  );
};

export default SignUpForm;
