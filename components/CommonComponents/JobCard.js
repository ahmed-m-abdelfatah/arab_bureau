import { Button, Card } from 'react-bootstrap';
import { useFullScreenModel } from '../../context/FullScreenModelContext.js';
import axiosRequest from '../../utils/axiosRequest.js';
import axiosServiceObj from '../../utils/axiosServiceObjects.js';
import { useState } from 'react';

import styles from '../../styles/CareersPageSections/OpenPositions.module.scss';

const JobCard = ({ job, isAdmin = false, setOffCanvasData, setShowOffCanvas }) => {
  const { openModel, setModelData } = useFullScreenModel();
  const [isShawn, setIsShawn] = useState(true);
  let deleteCount = 0;

  const handelOpenModal = () => {
    setModelData(job);
    openModel();
  };

  const handelDeleteJob = async () => {
    deleteCount++;

    if (deleteCount >= 2) {
      // delete from backend
      await axiosRequest(axiosServiceObj.deleteJobs(job._id));

      // delete from frontend
      setIsShawn(false);
    }
  };

  const handelEditJob = () => {
    setOffCanvasData(prev => ({ ...prev, ...job }));
    setShowOffCanvas(true);
  };

  if (isShawn) {
    return (
      <Card className='my-3'>
        <Card.Body className='d-flex align-items-center justify-content-between flex-wrap'>
          <Card.Title>{job.title}</Card.Title>
          <div className='d-flex flex-wrap'>
            <Button onClick={handelOpenModal} className={`m-3 w-sm-100 text-capitalize ${styles['bgc-blue']}`}>
              View Job
            </Button>
            {isAdmin && (
              <>
                <Button variant='success' onClick={handelEditJob} className='m-3 w-sm-100 text-capitalize'>
                  Edit Job
                </Button>
                <Button variant='danger' onClick={handelDeleteJob} className='m-3 w-sm-100 text-capitalize'>
                  Delete Job
                </Button>
              </>
            )}
          </div>
        </Card.Body>
      </Card>
    );
  }

  return <></>;
};

export default JobCard;
