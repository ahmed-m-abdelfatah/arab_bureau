import Link from 'next/link.js';

const Footer = () => {
  return (
    <footer className='footer'>
      <h1 data-i18n='arabBureau'>
        <Link href='/' passHref>
          <a className='text-decoration-none'>arab bureau</a>
        </Link>
      </h1>
      <p>
        <a className='mx-3' href='https://www.facebook.com/arabbureau' target='_blank' rel='noreferrer noopener'>
          <i className='fab fa-facebook-square'></i>
        </a>
        <a
          href='https://www.youtube.com/channel/UCSCBe8HUn76qF9l7Sgt-Paw/featured'
          target='_blank'
          rel='noreferrer noopener'>
          <i className='fab fa-youtube'></i>
        </a>
      </p>
      <p>
        © Copyright {new Date().getFullYear()}. Arab Bureau. <br />
        Created By{' '}
        <a href='https://github.com/ahmed-m-abdelfatah' target='_blank' rel='author noreferrer noopener'>
          @ahmed-m-abdelfatah
        </a>
      </p>
    </footer>
  );
};

export default Footer;
