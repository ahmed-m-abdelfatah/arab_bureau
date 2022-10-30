import { Col, Container, Row } from 'react-bootstrap';
import MainHeading from '../CommonComponents/MainHeading.js';

const Activities = () => {
  return (
    <section id='activities' className='activities'>
      <Container>
        <MainHeading title='activities' description='we work to earn our clients satisfaction' />

        <Row className='row pt-5'>
          <Col md='6' className='pb-2'>
            <div className='content'>
              <h4 className='h3 text-uppercase' data-i18n='whatWeDo'>
                what we do…
              </h4>
              <ul>
                <li data-i18n='whatWeDo1'>
                  We offer a complete solution services for the peace of mind of our clients, these services include
                  location and site survey, soil, water and light studies, project budget studies, urban planning and
                  design.
                </li>
                <li data-i18n='whatWeDo2'>We also offer tender preparation with all needed documents.</li>
                <li data-i18n='whatWeDo3'>
                  We provide project monitoring teams for daily supervision each activity done on site transferring
                  knowledge to customer and project team as well.
                </li>
                <li data-i18n='whatWeDo4'>
                  We also provide all these services by a group of experts in the field desired to achieve client
                  vision.
                </li>
              </ul>
            </div>
          </Col>
          <Col md='6' className='pb-2'>
            <div className='content'>
              <h4 className='h3 text-uppercase' data-i18n='howWeWork'>
                how we work?
              </h4>
              <ul>
                <li data-i18n='howWeWork1'>
                  Our approach is based on defining a full description of the project including requirement uses and
                  purposes while meeting budget and schedule goals.
                </li>
                <li data-i18n='howWeWork2'>
                  A full understanding of the local market and its requirements makes us able to satisfy customers in
                  terms of ideal design and the ideal cost of their projects.
                </li>
                <li data-i18n='howWeWork3'>
                  We always look forward to be distinguished and unique in our business so that we remain at the
                  forefront of consulting offices in the region and always look for the best.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Activities;
