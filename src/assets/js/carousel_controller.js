function carouselController() {
  const carouselInner = document.querySelector('#carousel-controller .carousel-inner');
  const carouselIndicators = document.querySelector('#carousel-controller .carousel-indicators');

  let carouselData = [
    `welcome to <br> arab bureau`,
    `specialized in <br> engineering consultation`,
    `founded in <br> year 1898`,
    `committed to <br> excellence`,
  ];

  let carouselDataArabic = [
    `مرحبا بك في <br> المكتب العربي`,
    `متخصص في <br> الاستشارات هندسية`,
    `تاسس في <br> عام 1898`,
    `ملتزمون بـ <br> التميز`,
  ];

  let carouselDataFrench = [
    `Bienvenue à <br> arab bureau`,
    `spécialisé dans <br> conseil en ingénierie`,
    `fondé en <br> année 1898`,
    `engagé à <br> excellence`,
  ];

  function addDataToCarousel(dataArr) {
    if (!dataArr.length) {
      return;
    }

    let textTemplate = '';
    let indicatorsTemplate = '';

    for (let index = 0; index < dataArr.length; index++) {
      let count = index + 1;

      textTemplate += `
      <div class="carousel-item ${index === 0 && 'active'}">
      <div class="intro intro-${count}">
      <div class="transparent text-light d-flex flex-column justify-content-center align-items-center vh-100">
      <h2 class="text-capitalize h1 fw-bold text-center">
                ${dataArr[index]}
            </h2>
        </div>
        </div>
        </div>`;

      indicatorsTemplate += `
        <button type="button" data-bs-target="#carousel-controller" data-bs-slide-to="${index}" aria-label="Slide ${count}" ${
        index === 0 && 'class="active" aria-current="true"'
      }></button>`;
    }

    carouselInner.innerHTML = textTemplate;
    carouselIndicators.innerHTML = indicatorsTemplate;
  }

  switch (document.documentElement.lang) {
    case 'ar': {
      addDataToCarousel(carouselDataArabic);
      break;
    }
    case 'fr': {
      addDataToCarousel(carouselDataFrench);
      break;
    }

    default: {
      addDataToCarousel(carouselData);
      break;
    }
  }
}
