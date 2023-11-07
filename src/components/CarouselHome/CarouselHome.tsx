import Carousel from 'react-bootstrap/Carousel';


const CarouselHome = () => {
  return (
    <Carousel>
    <Carousel.Item interval={1000}>
      <img 
      className='d block w-100'
      style={{maxHeight: "500px", objectFit: 'cover'}}
      src="src/assets/images/la bombonera.jpg" 
      alt="slide 1" 
      
      />
      <Carousel.Caption>
        <h3>El único grande</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>

    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img 
      className='d block w-100'
      style={{maxHeight: "500px", objectFit: 'cover'}}
      src="src/assets/images/la12dizeo.jpg" alt="slide2" />

      <Carousel.Caption>
        <h3>BOKEEE</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      
      <img 
      className='d block w-100'
      style={{maxHeight: "500px", objectFit: 'cover'}}
      src="src/assets/images/la12.jpg" alt="slide3" />
      <Carousel.Caption>
        <h3>Como vas a poner a Valdez de 9?</h3>
        <p>
          Te Brindamos todo el asesoramiento!!
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default CarouselHome