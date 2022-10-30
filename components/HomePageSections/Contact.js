import Link from 'next/link.js';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <Container>
        <Row className='g-4'>
          <Col lg='6'>
            <Row>
              <Col md='4' className='pb-4'>
                <div className='box'>
                  <i className='fas fa-envelope'></i>
                  <h4 data-i18n='emails'>emails</h4>
                  <ul className='list-unstyled p-0'>
                    <li>
                      <bdi>
                        <a href='mailto:info@arabbureau.com'>info@arabbureau.com</a>
                      </bdi>
                    </li>
                    <li>
                      <bdi>
                        <a href='mailto:hr@arabbureau.com'>hr@arabbureau.com</a>
                      </bdi>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md='4' className='pb-4'>
                <div className='box'>
                  <i className='fas fa-phone-alt'></i>
                  <h4 data-i18n='phoneNumbers'>phone numbers</h4>
                  <ul className='list-unstyled p-0'>
                    <li data-i18n='tel'>Tel : +224881045 / +224881111</li>
                    <li data-i18n='fax'>Fax : +224881000 / +226833669</li>
                  </ul>
                </div>
              </Col>
              <Col md='4' className='pb-4'>
                <div className='box'>
                  <i className='fas fa-clock'></i>
                  <h4 data-i18n='businessHours'>Business Hours</h4>
                  <p data-i18n='businessHoursDesc'>Sunday to Thursday from 9:00 to 15:00</p>
                </div>
              </Col>
              <Col md='4' className='col-md-12 pb-4'>
                <div className='box'>
                  <i className='fas fa-map-marker-alt'></i>
                  <h4 data-i18n='theHeadOffice'>The Head Office</h4>
                  <address data-i18n='address'>
                    Extension of Ramsis street – ElAbbasseya –cairo –infront of the police college
                  </address>
                  <a href='https://goo.gl/maps/TzM8sLxKjTKoUriS8' target='_blank' rel='noopener noreferrer'>
                    Get Directions
                  </a>
                </div>
              </Col>
              <Col md='4' className='col-md-12 pb-4'>
                <div>
                  <Link href='/careers' passHref>
                    <Button variant='outline-secondary'>Careers Page - Join us</Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg='6'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55247.66908759602!2d31.34264600790869!3d30.066127313517544!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd1cea4d41b93561!2z2KfZhNmF2YPYqtioINin2YTYudix2KjZiiDZhNmE2KrYtdmF2YrZhdin2Kog2Ygg2KfZhNin2LPYqti02KfYsdin2Kog2KfZhNmH2YbYr9iz2YrYqQ!5e0!3m2!1sen!2seg!4v1666759873513!5m2!1sen!2seg'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
