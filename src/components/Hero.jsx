import React, { useEffect, useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import gsap from 'gsap';
import './Hero.css'; // custom styles

function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      x: '-100%',
      repeat: -1,
      duration: 25,
      ease: 'linear',
    });
  }, []);

  return (
    <div className="hero-wrapper position-relative">
      {/* Background Running Text */}
      <div className="running-text " ref={textRef}>
        <span>MEN’S FASHION • MEN’S FASHION • MEN’S FASHION • MEN’S FASHION • MEN’S FASHION • MEN’S FASHION • </span>
      </div>

      {/* Carousel */}
      <Carousel fade interval={2000} controls indicators>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/1200x/a4/e8/7f/a4e87f77a37610077e81af5287f95163.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Free Styles, Comfort</h2>
            <a href="/products" className="btn btn-dark">Explore</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/1200x/b5/48/66/b54866bea76447d18bcee45015538f70.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Free Styles, Comfort</h2>
            <a href="/products" className="btn btn-dark">Explore</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/1200x/58/0a/e3/580ae35aff541787a79b4a41e41b72eb.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Free Styles, Comfort</h2>
            <a href="/products" className="btn btn-dark">Explore</a>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more slides as needed */}
      </Carousel>
    </div>
  );
}

export default Hero;
