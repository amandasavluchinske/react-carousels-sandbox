import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 120px;
  height: 400px;
  border: 1px solid black;
  margin: 10px;
  ${({ fade }) => fade && `
    background-color: red;
  `};
`;


const Card = ({ name, fade }) => {
  return (<CardContainer fade={fade}>{name}</CardContainer>);
};

export default Card;

