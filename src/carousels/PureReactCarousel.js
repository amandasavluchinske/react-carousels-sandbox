import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import styled from 'styled-components';
import { map } from "lodash";
import CARD_DATA from "../utils/cardContent";
import Card from "../Card";

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 780px;
  border: 1px solid blue;
`;

const PureReactCarousel = () => {
  return (
    <StyledCarouselProvider
      naturalSlideWidth={150}
      naturalSlideHeight={400}
      totalSlides={9}
      visibleSlides={4}
    >
      <ButtonBack>Previous</ButtonBack>
      <Slider>
        {map(CARD_DATA, (data, index) => <Slide index={index}><Card key={data.name} name={data.name} /></Slide>)}
      </Slider>
      <ButtonNext>Next</ButtonNext>
    </StyledCarouselProvider>
  );
};

export default PureReactCarousel;