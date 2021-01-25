import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 150px;
  height: 400px;
  border: 1px solid black;
  margin: 10px;
`;


const Card = ({ name }) => {
  return (<CardContainer>{name}</CardContainer>);
};

export default Card;

