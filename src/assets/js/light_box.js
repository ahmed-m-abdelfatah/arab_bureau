function lightBox() {
  const imgs = [...document.querySelectorAll('.projects img')];
  const lightbox = document.querySelector('.projects .light-box');
  const lightboxItem = document.querySelector('.projects .light-box .light-box-item');
  const close = document.getElementById('close');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  // events
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', showImgInLightbox);
  }

  close.addEventListener('click', closeLightbox);
  prev.addEventListener('click', e => changeImg(e, -1));
  next.addEventListener('click', e => changeImg(e, +1));
  document.addEventListener('keydown', keyboardEvent);

  // logic
  let currentIndex;
  let isLightboxOn = false;

  function showImgInLightbox(e) {
    currentIndex = imgs.indexOf(e.target);
    let imgSrc = e.target.src;
    lightboxItem.style.backgroundImage = `url(${imgSrc})`;
    lightbox.style.display = 'flex';
    isLightboxOn = !isLightboxOn;
  }

  function closeLightbox() {
    lightbox.style.display = 'none';
    isLightboxOn = !isLightboxOn;
  }

  function changeImg(e, changeValue) {
    currentIndex += changeValue;

    if (currentIndex < 0) {
      currentIndex = imgs.length - 1;
    }

    if (currentIndex === imgs.length) {
      currentIndex = 0;
    }

    let imgSrc = imgs[currentIndex].src;
    lightboxItem.style.backgroundImage = `url(${imgSrc})`;
  }

  function keyboardEvent(e) {
    if (!isLightboxOn) {
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
        changeImg(e, +1);
        break;
      case 'ArrowLeft':
        changeImg(e, -1);
        break;
      case 'Escape':
        closeLightbox();
        break;

      default:
        e.preventDefault();
        break;
    }
  }
}
lightBox();
