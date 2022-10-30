import { Col, Container, Row } from 'react-bootstrap';
import MainHeading from '../CommonComponents/MainHeading.js';

const About = () => {
  return (
    <section id='about' className='about'>
      <Container>
        <MainHeading title='about' />

        <p className='blockquote text-center fs-4 text-capitalize' data-i18n='aboutDesc'>
          The Arab Bureau For Design And Engineering Consultancy Was Established In 1898. And Became The Main Official
          Consultant Office For Egypt In 1965.
          <br />
          <br />
          Since Then, Major Projects Had Been Assigned To The Bureau, Especially Those Of Ministries Of Foreign Affairs,
          Interior, Justice, And Health In Addition To Presidential Palaces. Our Firm Considered As One Of The
          Subsidiaries Of The Holding Company For Construction &amp; Development, And Provides High Quality Consultancy
          Services In The Fields Of Urban Planning, Designing Of Architectural &amp; Civil Projects, Construction
          Supervision As Well As Applied And Experimental Researches.
          <br />
          <br />
          Our Activities Have Also Expanded To Cover The Middle East And African Countries, E.G, Planning And Designing
          Of Basra And Sulaymaniya Universities In Iraq And Islamic University Of SAY At Niger, In Addition To Winning
          The Bids Of The Egyptian Embassies In Riyadh And Baghdad.
          <br />
          <br />
          We Have Also Entered In Collaboration With Foreign Organizations, UNESCO, World Bank &amp; USAID.
        </p>

        <Row className='pt-5'>
          <Col md='6' className='pb-4'>
            <div className='vision-points'>
              <i className='fas fa-paper-plane fa-2x'></i>
              <i className='fas fa-paper-plane fa-2x'></i>
              <div className='content'>
                <h4 className='text-uppercase' data-i18n='mission'>
                  mission
                </h4>
                <p data-i18n='missionDesc'>
                  To leave an imprint for us wherever we work with our distinction and excellence in transforming
                  nothingness into real monumental buildings.
                </p>
              </div>
            </div>
          </Col>
          <Col md='6' className='pb-4'>
            <div className='vision-points'>
              <i className='fas fa-eye fa-2x'></i>
              <i className='fas fa-eye fa-2x'></i>
              <div className='content'>
                <h4 className='text-uppercase' data-i18n='vision'>
                  vision
                </h4>
                <p data-i18n='visionDesc'>
                  Increasing the quality of human life by taking care of his comfortable efficient and ensuring that he
                  lives a prosperous life as much as possible.
                </p>
              </div>
            </div>
          </Col>
          <Col md='6' className='pb-4'>
            <div className='vision-points'>
              <i className='fas fa-globe fa-2x'></i>
              <i className='fas fa-globe fa-2x'></i>
              <div className='content'>
                <h4 className='text-uppercase' data-i18n='coreValue'>
                  core value
                </h4>
                <p data-i18n='coreValueDesc'>
                  Build a strong and long relationship with our clients where mutual trust in the base of this relation
                  in order to be indispensable for our clients.
                </p>
              </div>
            </div>
          </Col>
          <Col md='6' className='pb-4'>
            <div className='vision-points'>
              <i className='fas fa-info-circle fa-2x'></i>
              <i className='fas fa-info-circle fa-2x'></i>
              <div className='content'>
                <h4 className='text-uppercase' data-i18n='generalInformation'>
                  general information
                </h4>
                <p data-i18n='generalInformationDesc'>
                  Foundation: Arab Bureau was established in 1898.
                  <br />
                  Trade Register: Register No. Cairo Exporters Register No. permanent.
                  <br />
                  Tax Card: Card No. – Date of Issuance 27/4/1993 Cairo.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
