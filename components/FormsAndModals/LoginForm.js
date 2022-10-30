import Link from 'next/link.js';
import { useRouter } from 'next/router.js';
import { useState } from 'react';
import { Button, Container, Form, InputGroup, Spinner } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext.js';
import axiosRequest from '../../utils/axiosRequest.js';
import axiosServiceObj from '../../utils/axiosServiceObjects.js';
import { keys, saveToStorage } from '../../utils/sessionStorage.js';
import validation from '../../utils/validation.js';
import validators from '../../utils/validation_schema.js';

import styles from '../../styles/FormsAndModals/LoginForm.module.scss';

const LoginForm = () => {
  const [user, setUser] = useState({ userName: '', password: '' });
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const router = useRouter();
  const { setToken } = useAuth();

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
    const validationErrors = validation(editedUser, validators.login);

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
      const res = await axiosRequest(axiosServiceObj.login(editedUser));

      // handel req errors
      if (res?.response?.status === 404) {
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

      if (res?.status === 201) {
        // save token to context
        setToken(res.data.token);

        // save to session storage
        saveToStorage(keys.token, res.data.token);

        // go to login page
        router.push('/admin');
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <section className={styles['login']}>
      <Container className={styles['container']}>
        <h1 className='text-capitalize mb-5 text-center'>Login</h1>

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

          <Button type='submit' className='w-100'>
            {isLoading ? (
              <Spinner animation='border' size='sm'>
                <span className='visually-hidden'>Loading...</span>
              </Spinner>
            ) : (
              'Login'
            )}
          </Button>
        </Form>

        <p className='mt-3 text-capitalize'>
          don&#39;t have an admin account{' '}
          <Link href='/admin/signup' passHref>
            <a className='text-capitalize'>signup</a>
          </Link>
        </p>

        <Link href='/' passHref>
          <a className='text-capitalize'>got to home page</a>
        </Link>
      </Container>
    </section>
  );
};

export default LoginForm;
