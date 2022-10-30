import { useState } from 'react';
import { Container } from 'react-bootstrap';
import JobCard from '../CommonComponents/JobCard.js';
import AdminOffcanvas from './AdminOffcanvas.js';
import LogoutBtn from './LogoutBtn.js';

const OpenPositionsAdmin = ({ jobList }) => {
  const [currentJobList, setCurrentJobList] = useState(jobList);
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [offCanvasData, setOffCanvasData] = useState({
    title: '',
    description: '',
    responsibilities: '',
    requirements: '',
    salaryRange: '',
  });

  return (
    <section>
      <Container>
        <AdminOffcanvas
          showOffCanvas={showOffCanvas}
          setShowOffCanvas={setShowOffCanvas}
          offCanvasData={offCanvasData}
          setOffCanvasData={setOffCanvasData}
          setCurrentJobList={setCurrentJobList}
        />
        <LogoutBtn />
        {currentJobList.map(job => (
          <JobCard
            key={job._id}
            job={job}
            isAdmin={true}
            setOffCanvasData={setOffCanvasData}
            setShowOffCanvas={setShowOffCanvas}
          />
        ))}
      </Container>
    </section>
  );
};

export default OpenPositionsAdmin;
