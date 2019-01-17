import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Slideshow.css';

const SlideShow = ({ slides }) => {
  
  const slidesArray = slides.map((slideId)=>{
    return (
      <Slide id={slideId} key={slideId} className='template-slide'></Slide>
    )
  });
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={slidesArray.length}
        isPlaying={true}
      >
        <Slider className='slider'>
          { slidesArray }
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  
};

export default SlideShow;