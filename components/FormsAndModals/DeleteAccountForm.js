import { useRouter } from 'next/router.js';
import { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext.js';
import axiosRequest from '../../utils/axiosRequest.js';
import axiosServiceObj from '../../utils/axiosServiceObjects.js';
import { keys, removeFromStorage } from '../../utils/sessionStorage.js';
import { checkTokenValid } from '../../utils/tokenCheck.js';
import validation from '../../utils/validation.js';
import validators from '../../utils/validation_schema.js';

const DeleteAccountForm = () => {
  const [password, setPassword] = useState({ password: '' });
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const router = useRouter();
  const { token } = useAuth();
  let deleteCount = 0;

  const clearErrors = () => {
    setIsError(false);
    setErrorMsg(null);
  };

  const handelChange = e => {
    isError && clearErrors();
    setPassword(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelSubmit = async () => {
    deleteCount++;

    if (deleteCount >= 2) {
      deleteCount = 0;
      setIsLoading(true);
      clearErrors();

      //validation
      const validationErrors = validation(password, validators.deleteAccount);

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
        const res = await axiosRequest(axiosServiceObj.deleteProfile(token, password));

        if (res?.response?.status === 400) {
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

        // go to main page
        if (res.status === 200) {
          removeFromStorage(keys.token);
          router.replace('/');
        }
      }
    }
  };

  checkTokenValid()();

  return (
    <Form className='w-75 m-auto'>
      {isError && (
        <ul className='list-unstyled mt-3'>
          {errorMsg.map((error, index) => (
            <li className='text-bg-danger mb-3 p-3' key={index}>
              {error}
            </li>
          ))}
        </ul>
      )}

      <Form.Group className='mb-3'>
        <Form.Control
          type='password'
          placeholder='current password'
          className='shadow-none'
          name='password'
          autoComplete='off'
          onChange={handelChange}
          required
        />
      </Form.Group>

      <div className='mt-3 text-end'>
        <Button type='button' variant='danger' className='w-100' onClick={handelSubmit}>
          {isLoading ? (
            <Spinner animation='border' size='sm'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          ) : (
            'DELETE YOUR ADMIN ACCOUNT'
          )}
        </Button>
      </div>
    </Form>
  );
};

export default DeleteAccountForm;
