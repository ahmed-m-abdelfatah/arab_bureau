import { useEffect, useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import styles from '../../styles/CareersPageSections/OpenPositions.module.scss';
import removeEmptyFromObj from '../../utils/removeEmptyFromObj.js';
import AddNewJobForm from '../FormsAndModals/AddNewJobForm.js';
import EditJobForm from '../FormsAndModals/EditJobForm.js';
import EditProfileForm from '../FormsAndModals/EditProfileForm.js';

const AdminOffcanvas = ({ showOffCanvas, setShowOffCanvas, offCanvasData, setOffCanvasData, setCurrentJobList }) => {
  const formTypes = {
    new: 'AddNewJobForm',
    edit: 'EditJobForm',
    profile: 'EditProfileForm',
  };

  const [formType, setFormType] = useState(formTypes.new);
  const [editProfile, setEditProfile] = useState(false);

  useEffect(() => {
    const isThereData = () => {
      const notEmptyData = removeEmptyFromObj(offCanvasData);
      // console.log('notEmptyData', notEmptyData);

      if (Object.keys(notEmptyData).length) {
        setFormType(formTypes.edit);
      }
    };

    const isEditProfile = () => {
      if (editProfile) {
        setFormType(formTypes.profile);
      }
    };

    isEditProfile();
    isThereData();
  }, [offCanvasData, editProfile]);

  const handleClose = () => {
    setOffCanvasData({
      title: '',
      description: '',
      responsibilities: '',
      requirements: '',
      salaryRange: '',
    });
    setEditProfile(false);
    setShowOffCanvas(false);
    setFormType(formTypes.new);
  };
  const handleShow = () => setShowOffCanvas(true);
  const handleEditProfile = () => {
    setEditProfile(true);
    handleShow();
  };

  return (
    <>
      <Button variant='primary' onClick={handleShow} className={`m-3 w-sm-75 text-capitalize ${styles['bgc-blue']}`}>
        Add New job
      </Button>

      <Button variant='success' onClick={handleEditProfile} className='m-3 w-sm-75 text-capitalize'>
        Edit Profile
      </Button>

      <Offcanvas show={showOffCanvas} onHide={handleClose} backdrop='static' className='w-100'>
        <Offcanvas.Header className={styles['secondary-bg']} closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className={styles['secondary-bg']}>
          {
            {
              [formTypes.new]: <AddNewJobForm handleClose={handleClose} setCurrentJobList={setCurrentJobList} />,
              [formTypes.edit]: (
                <EditJobForm
                  handleClose={handleClose}
                  offCanvasData={offCanvasData}
                  setCurrentJobList={setCurrentJobList}
                />
              ),
              [formTypes.profile]: <EditProfileForm handleClose={handleClose} />,
            }[formType]
          }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AdminOffcanvas;
