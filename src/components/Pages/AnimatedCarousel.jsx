import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './AnimatedCarousel.css';

import slide1 from '../assets/s1.png';
import slide2 from '../assets/s2.png';
import slide3 from '../assets/s3.png';
import slide4 from '../assets/s1.png';
import slide5 from '../assets/s3.png';

const slides = [
  {
    image: slide1,
    title: 'Innovative IT Solutions',
    subtitle: 'That Drive Your Business Forward',
    description: 'Driving Digital Transformation Through Smart, Future-Ready Technology.',
    button1: 'Get a Free Consultation →',
    button2: 'Contact Us →',
  },
  {
    image: slide2,
    title: 'Empowering Startups',
    subtitle: 'With Cutting-edge Technology',
    description: 'From idea to execution, we make your startup journey smoother.',
    button1: 'Start Now →',
    button2: 'Learn More →',
  },
  {
    image: slide3,
    title: 'AI Powered Tools',
    subtitle: 'That Automate Your Workflow',
    description: 'Boost productivity with smart AI-integrated systems.',
    button1: 'Try AI Tools →',
    button2: 'Know More →',
  },
  {
    image: slide4,
    title: 'Cloud-Based Solutions',
    subtitle: 'Scalable and Secure Infrastructure',
    description: 'Migrate to cloud and experience unmatched performance.',
    button1: 'Get Cloud Support →',
    button2: 'Explore Services →',
  },
  {
    image: slide5,
    title: '24/7 Customer Support',
    subtitle: 'We Are Here to Help Anytime',
    description: 'Our expert team is always ready to support you.',
    button1: 'Talk to Expert →',
    button2: 'Support Center →',
  },
];

const AnimatedCarousel = () => {
  return (
    <Carousel fade interval={4000}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div
            className="carousel-background d-flex align-items-center justify-content-center text-white"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay-box text-center">
              <h3 className="animated fadeInDown">{slide.title}</h3>
              <h1 className="animated fadeInUp display-4 fw-bold">{slide.subtitle}</h1>
              <p className="animated slideInUp">{slide.description}</p>
              <div className="buttons mt-4">
                <Button variant="success" className="me-3 animated zoomIn px-4 py-2 fw-semibold">
                  {slide.button1}
                </Button>
                <Button variant="light" className="animated zoomIn px-4 py-2 fw-semibold">
                  {slide.button2}
                </Button>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default AnimatedCarousel;
