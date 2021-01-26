import React from 'react';
import styled from 'styled-components';
import './App.css';
import ReactSlick from "./carousels/ReactSlick";
import PureReactCarousel from "./carousels/PureReactCarousel";
import ReactAliceCarousel from "./carousels/AliceCarousel";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'pure-react-carousel/dist/react-carousel.es.css';
import "react-alice-carousel/lib/alice-carousel.css";


const Container = styled.div`
  width: 800px;
  border: 1px solid black;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container><div>React Slick<ReactSlick /></div></Container>
        <Container><div>Pure React Carousel<PureReactCarousel /></div></Container>
        <Container><div>React Alice Carousel<ReactAliceCarousel /></div></Container>
      </header>
    </div>
  );
}

export default App;
