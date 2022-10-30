import { useState } from 'react';
import { Button, Form, InputGroup, Spinner } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext.js';
import axiosRequest from '../../utils/axiosRequest.js';
import axiosServiceObj from '../../utils/axiosServiceObjects.js';
import { checkTokenValid } from '../../utils/tokenCheck.js';
import validation from '../../utils/validation.js';
import validators from '../../utils/validation_schema.js';

const UpdateDataForm = ({ handleClose }) => {
  const { adminData, setAdminData } = useAuth();
  const [user, setUser] = useState({ ...adminData, userName: adminData.userName.substring(1) });
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

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
    delete editedUser.message;

    //validation
    const validationErrors = validation(editedUser, validators.updateProfile);

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
      const res = await axiosRequest(axiosServiceObj.updateProfile(editedUser));

      if (res?.response?.status === 422) {
        const errors = res.response.data.err;
        const errorsMsg = errors.map(error => error.msg);
        setIsError(true);
        setErrorMsg(errorsMsg);
        setIsLoading(false);
      }

      // edit user
      if (res?.status === 200) {
        setAdminData(editedUser);
        handleClose();
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  checkTokenValid()();

  return (
    <Form className='w-75 m-auto mb-3'>
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
          type='text'
          placeholder='Your name'
          className='shadow-none'
          name='name'
          autoComplete='off'
          onChange={handelChange}
          value={user.name}
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
            value={user.userName}
            required
          />
        </InputGroup>
      </Form.Group>

      <div className='mt-3 text-end'>
        <Button className='w-100' type='button' onClick={handelSubmit}>
          {isLoading ? (
            <Spinner animation='border' size='sm'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          ) : (
            'Update Data'
          )}
        </Button>
      </div>
    </Form>
  );
};

export default UpdateDataForm;
