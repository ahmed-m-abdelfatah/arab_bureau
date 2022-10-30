import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { checkTokenValid } from '../../utils/tokenCheck.js';
import DeleteAccountForm from './DeleteAccountForm.js';
import UpdateDataForm from './UpdateDataForm.js';
import UpdatePasswordForm from './UpdatePasswordForm.js';

const EditProfileForm = ({ handleClose }) => {
  checkTokenValid()();

  return (
    <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
      <Row>
        <Col sm={3}>
          <Nav variant='pills' className='flex-column'>
            <Nav.Item>
              <Nav.Link eventKey='first'>Update Data</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='second'>Change Password</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='third'>Delete Account</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey='first' mountOnEnter={true} unmountOnExit={true}>
              <div className='mt-4'>
                <UpdateDataForm handleClose={handleClose} />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey='second' mountOnEnter={true} unmountOnExit={true}>
              <div className='mt-4'>
                <UpdatePasswordForm handleClose={handleClose} />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey='third' mountOnEnter={true} unmountOnExit={true}>
              <div className='mt-5'>
                <DeleteAccountForm handleClose={handleClose} />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default EditProfileForm;
