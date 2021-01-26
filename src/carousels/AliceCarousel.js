import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { map } from "lodash";
import CARD_DATA from "../utils/cardContent";
import Card from "../Card";


const ReactAliceCarousel = () => {
  const items = map(CARD_DATA, (data) => <Card key={data.name} name={data.name} />);
  return (
    <AliceCarousel
      items={items}
      responsive={{
        1024: {
          items: 4,
        }
      }}
      disableDotsControls
    />
  );
};

export default ReactAliceCarousel;