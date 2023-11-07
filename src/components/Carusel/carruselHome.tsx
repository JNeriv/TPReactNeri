import { Carousel } from "react-bootstrap"

const carruselHome = () => {
  return (
    <>
    <Carousel fade>
    <Carousel.Item>
      <Carousel.Caption>
      <img 
      className='d block w-100'
      style={{maxHeight: "500px", objectFit: 'cover'}}
      src="src/assets/images/descarga.jpg" 
      alt="slide 1"/>

        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <Carousel.Caption>
      <img 
      className='d block w-100'
      style={{maxHeight: "500px", objectFit: 'cover'}}
        src="src/assets/images/reputation-outfit-taylor-swift.jpg"      
        alt="slide 1"/>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <Carousel.Caption>
      <img 
      className='d block w-100'
      style={{maxHeight: "500px", objectFit: 'cover'}}
      src="src/assets/images/taylor-swift-reputation-costume.jpg" 
      alt="slide 1"/>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </>
  )
}

export default carruselHome