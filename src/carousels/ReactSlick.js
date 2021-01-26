import React, { useState } from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import CARD_DATA from "../utils/cardContent";
import Card from "../Card";
import { map } from 'lodash';

const StyledSlider = styled(Slider)`
  width: 780px;
  border: 1px solid blue;
`;

const Arrow = styled.div`
  background-color: red;
  color: white;
`;


const ReactSlick = () => {
  const [fade, setFade] = useState(false);
  const beforeChange = (oldIndex, newIndex) => {
    if (newIndex + 3 === CARD_DATA.length - 1) {
      setFade(newIndex + 3);
    } else {
      setFade(false);
    }
  };
  const settings = {
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <Arrow>&gt;</Arrow>,
      prevArrow: <Arrow>&lt;</Arrow>,
      infinite: false,
      beforeChange,
    };
  return (
    <div>
      <StyledSlider {...settings}>
        {map(CARD_DATA, (data, index) => <Card fade={fade === index} key={data.name} name={data.name} />)}
      </StyledSlider>
    </div>
  );
};

export default ReactSlick;