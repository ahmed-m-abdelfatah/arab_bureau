import Image from 'next/image.js';
import Link from 'next/link.js';
import { Container, Nav, Navbar } from 'react-bootstrap';

function BasicExample({ currentPath }) {
  return (
    <section id='home'>
      <Navbar
        bg='light'
        expand='lg'
        className='navbar navbar-expand-lg navbar-dark bg-transparent fixed-top w-100 scroll'>
        <Container>
          <Link href='/' passHref>
            <Navbar.Brand>
              <Image src='/img/logo_1.png' alt='logo' width='100' height='50' />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Link href='/' passHref>
                <Nav.Link active={currentPath === '/'}>home</Nav.Link>
              </Link>

              <Link href='/careers' passHref>
                <Nav.Link active={currentPath === '/careers'}>Careers</Nav.Link>
              </Link>
            </Nav>

            {/* <Nav.Item>
              <select className='select-language'>
                <option value='en' data-i18n='english'>
                  English
                </option>
                <option value='ar' data-i18n='arabic'>
                  Arabic
                </option>
                <option value='fr' data-i18n='french'>
                  French
                </option>
              </select>
            </Nav.Item> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default BasicExample;
