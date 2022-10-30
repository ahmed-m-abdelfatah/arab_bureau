import { Button, Col, Container, Row } from 'react-bootstrap';
import MainHeading from '../CommonComponents/MainHeading.js';

const Projects = () => {
  const links = [
    {
      link: 'http://www.bsic.gov.eg',
      name: 'Ministry business sector',
    },
    {
      link: 'http://www.hccd-construction.com',
      name: 'hccd-construction',
    },
    {
      link: 'http://www.egx.com.eg',
      name: 'Egyptian Stock Exchange',
    },
    {
      link: 'http://www.moee.gov.eg',
      name: 'Ministry Of Electricity',
    },
    {
      link: 'http://www.cabinet.gov.eg',
      name: 'The Cabinet Of Ministers',
    },
    {
      link: 'http://www.gafi.gov.eg',
      name: 'The Ministry Of Investment',
    },
    {
      link: 'http://www.lmdc.gov.eg',
      name: 'Leadership Development',
    },
    {
      link: 'http://www.eos.org.eg',
      name: 'Egyptian Organization "eos"',
    },
  ];

  const projects = [
    {
      link: '/img/work-1.jpg',
      caption: 'The sheikhdom of Al-Azhar Al-Sharif',
    },
    {
      link: '/img/work-2.jpg',
      caption: 'project',
    },
    {
      link: '/img/work-3.jpg',
      caption: 'project',
    },
    {
      link: '/img/work-4.jpg',
      caption: 'Sheikh Zayed Al Nahyan Hospital',
    },
    {
      link: '/img/work-5.jpg',
      caption: '6 October Stadium',
    },
    {
      link: '/img/work-6.jpg',
      caption: 'Monuments of Nubia Museum',
    },
    {
      link: '/img/work-7.jpg',
      caption: 'Elbhara Security Directorate',
    },
    {
      link: '/img/work-8.jpg',
      caption: 'Golden Park',
    },
    {
      link: '/img/work-9.jpg',
      caption: 'University of Basra, Iraq',
    },
  ];

  return (
    <section id='projects' className='projects'>
      <MainHeading title='projects' />

      <Container className='text-center'>
        <Row>
          {/* {[...Array(9)].map((_, index) => { */}
          {projects.map((Project, index) => {
            const num = ++index;

            return (
              <Col md='4' className='pb-4' key={num}>
                <div className='item'>
                  <img className='img-fluid' src={`/img/work-${num}.jpg`} alt={`work-${num}.jpg`} layout='fill' />
                  <div className='caption'>
                    <h4 data-name={`project${num}`}>{Project.caption}</h4>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>

        <div className='text-center'>
          <h3 className='h1 pt-5' data-i18n='importantEgyptianSites'>
            Important Egyptian Sites
          </h3>
          {links.map((link, index) => {
            return (
              <Button
                key={index}
                className='m-2 d-inline-block'
                variant='outline-secondary'
                href={link.link}
                target='_blank'>
                {link.name}
              </Button>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
