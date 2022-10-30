import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  const carouselData = [
    `welcome to <br/> arab bureau`,
    `specialized in <br/> engineering consultation`,
    `founded in <br/> year 1898`,
    `committed to <br/> excellence`,
  ];

  return (
    <Carousel interval={2000} pause={false} fade indicators={false}>
      {carouselData.map((item, index) => (
        <Carousel.Item key={index}>
          <div className={`intro intro-${++index}`}>
            <div
              className={`transparent text-light d-flex flex-column justify-content-center align-items-center vh-100`}>
              <h2 className='text-capitalize h1 fw-bold text-center'>
                {item.split(' <br/> ')[0]} <br />
                {item.split(' <br/> ')[1]}
              </h2>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledExample;
