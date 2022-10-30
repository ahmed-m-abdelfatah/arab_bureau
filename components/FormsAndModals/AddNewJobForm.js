import { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import styles from '../../styles/CareersPageSections/OpenPositions.module.scss';
import axiosRequest from '../../utils/axiosRequest.js';
import axiosServiceObj from '../../utils/axiosServiceObjects.js';
import removeEmptyFromObj from '../../utils/removeEmptyFromObj.js';
import { checkTokenValid } from '../../utils/tokenCheck.js';
import validation from '../../utils/validation.js';
import validators from '../../utils/validation_schema.js';
import DynamicInputs from './DynamicInputs.js';

const AddNewJobForm = ({ handleClose, setCurrentJobList }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [responsibilitiesInputs, setResponsibilitiesInputs] = useState([{ id: uuidv4(), value: '' }]);
  const [requirementsInputs, setRequirementsInputs] = useState([{ id: uuidv4(), value: '' }]);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    salaryRange: '',
  });

  const handelChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelReset = () => {
    setIsError(false);

    const restDynamicInputs = inputs => {
      return inputs.map(input => ({
        id: input.id,
        value: '',
      }));
    };

    setFormData({ title: '', description: '', salaryRange: '' });
    setResponsibilitiesInputs(prev => restDynamicInputs(prev));
    setRequirementsInputs(prev => restDynamicInputs(prev));
  };

  const handelSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    const fullData = {
      ...formData,
      responsibilities: responsibilitiesInputs.map(({ value }) => value),
      requirements: requirementsInputs.map(({ value }) => value),
    };

    const notEmptyData = removeEmptyFromObj(fullData);

    //validation
    const validationErrors = validation(notEmptyData, validators.addJob);

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
      const res = await axiosRequest(axiosServiceObj.addJob(notEmptyData));

      if (res?.status === 201) {
        // get updated job jobList
        const res = await axiosRequest(axiosServiceObj.getAllJobs);
        const updatedJobList = res.data.allJobs;
        setCurrentJobList(updatedJobList);

        // close the canvas
        handleClose();
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }

    setIsLoading(false);
    // handleClose();
  };

  checkTokenValid()();

  return (
    <Form className='w-75 m-auto'>
      <h3 className={styles['required']}>Job Tile</h3>
      <Form.Group className='mb-3'>
        <Form.Control
          type='text'
          className='shadow-none'
          placeholder='Job Tile'
          name='title'
          onChange={handelChange}
          autoComplete='off'
          required
        />
      </Form.Group>

      <h3 className={styles['required']}>Job Description</h3>
      <Form.Group className='mb-3'>
        <Form.Control
          as='textarea'
          rows='7'
          className='shadow-none'
          placeholder='Description'
          name='description'
          onChange={handelChange}
          autoComplete='off'
          required
        />
      </Form.Group>

      <DynamicInputs
        title='Main Responsibilities'
        placeholder='Responsibility'
        state={responsibilitiesInputs}
        setState={setResponsibilitiesInputs}
      />

      <DynamicInputs
        title='Requirements'
        placeholder='Requirement'
        state={requirementsInputs}
        setState={setRequirementsInputs}
      />

      <h3>Salary range</h3>
      <Form.Group className='mb-3'>
        <Form.Control
          type='text'
          className='shadow-none'
          placeholder='From 0000 To 0000 EGP /month'
          name='salaryRange'
          onChange={handelChange}
          autoComplete='off'
        />
      </Form.Group>

      {isError && (
        <ul className='list-unstyled mt-3'>
          {errorMsg.map((error, index) => (
            <li className='text-bg-danger mb-3 p-3' key={index}>
              {error}
            </li>
          ))}
        </ul>
      )}

      <div className='mt-3 text-end'>
        <Button type='reset' variant='danger' className='mx-3' onClick={handelReset}>
          Reset
        </Button>
        <Button type='button' onClick={handelSubmit}>
          {isLoading ? (
            <Spinner animation='border' size='sm'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          ) : (
            'Add New Job'
          )}
        </Button>
      </div>
    </Form>
  );
};

export default AddNewJobForm;
