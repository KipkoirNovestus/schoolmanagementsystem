import Carousel from "react-bootstrap/Carousel";

export default function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        <Carousel.Item>
          <Carousel.Caption>
            <img className="d-block w-100" src="" alt="First SLide" />
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <img className="d-block w-100" src="" alt="Second SLide" />
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <img className="d-block w-100" src="" alt="Third SLide" />
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
