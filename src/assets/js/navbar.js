function navbar() {
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav ul li a');
  const homeLink = document.querySelector('.navbar-brand');
  const sections = document.querySelectorAll('section');

  if (window.innerWidth < 992) {
    // change navbar style on mobile
    nav.classList.add('mobile');
  }

  window.addEventListener('resize', () => {
    // change navbar style on mobile
    if (window.innerWidth < 992) {
      nav.classList.add('mobile');
    } else {
      nav.classList.remove('mobile');
    }
  });

  window.addEventListener('scroll', () => {
    // change navbar style on scroll
    const about = document.getElementById('about');

    if (window.scrollY > about.offsetTop - 70) {
      nav.classList.add('scroll');
    } else {
      nav.classList.remove('scroll');
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      // handel nav click
      e.preventDefault();
      navLinks.forEach(link => link.classList.remove('active'));
      e.target.classList.add('active');

      let sectionId = e.target.getAttribute('href');
      if (!sectionId || sectionId.length < 2) {
        sectionId = '#home';
      }

      let section = document.querySelector(sectionId);
      if (!section) {
        section = document.querySelector('#home');
      }

      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    });
  });

  homeLink.addEventListener('click', e => {
    // edit click on logo
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  window.addEventListener('scroll', () => {
    // change active link while scrolling
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      let linkPath = link.getAttribute('href').slice(1);
      if (linkPath.toLowerCase() === current.toLowerCase()) {
        link.classList.add('active');
      }
    });
  });
}

navbar();
