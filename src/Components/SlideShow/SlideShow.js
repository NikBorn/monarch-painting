import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Slideshow.css';

class SlideShow extends Component {

  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider className='slider'>
          <Slide id={'slide1'} index={0}></Slide>
          <Slide id={'slide2'} index={1}></Slide>
          <Slide id={'slide3'} index={2}></Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
};

export default SlideShow;