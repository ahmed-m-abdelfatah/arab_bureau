import { Alert, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useFullScreenModel } from '../../context/FullScreenModelContext.js';

const FullScreenModel = () => {
  const { show, closeModel, modelData } = useFullScreenModel();
  const { title, description, responsibilities, requirements, salaryRange } = modelData;
  const style = 'text-capitalize fw-bold';

  return (
    <>
      <Modal show={show} fullscreen={true} onHide={closeModel}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h2 className={style}>{title}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='fs-4'>
          <h3 className={style}>Job Description</h3>
          <p>{description}</p>

          {responsibilities.length > 0 && (
            <>
              <h3 className={style}>Main Responsibilities</h3>
              <ul>
                {responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {requirements.length > 0 && (
            <>
              <h3 className={style}>Requirements</h3>
              <ul>
                {requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {salaryRange && (
            <>
              <h3 className={style}>Salary range</h3>
              <p>{salaryRange}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Alert className='w-100 d-flex flex-wrap align-items-center justify-content-between' variant='secondary'>
            <div>
              If you find yourself qualified enough, send your updated resume. <br />
              Email title: <span className='fw-bold text-capitalize'>{title}</span>
              <br />
              To:{' '}
              <Alert.Link href='mailto:hr@arabbureau.com'>
                <span className='text-black'>hr@arabbureau.com</span>
              </Alert.Link>
            </div>
            <Button variant='danger' className='ms-auto d-block' onClick={closeModel}>
              Close
            </Button>
          </Alert>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FullScreenModel;
