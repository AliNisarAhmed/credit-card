import React from 'react';
import styled from 'styled-components';

interface IProps {
  displayedName: string;
}

const CardHolderName = styled.p`
  grid-column: 2 / 4;
  grid-row: 5 / -1;

  justify-self: center;

  display: inline-block;
  font-size: 20px;
  position: relative;

  transform: scale(-1, 1);

  padding: 0 20px;

  z-index: -1;

  align-self: center;

  backface-visibility: hidden;

  font-weight: bold;
  background-color: #212121;
  color: transparent;
  text-shadow: 0px 1px 2px rgba(255, 255, 255, 0.8);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-transform: uppercase;
`;

const CardNameBack: React.FC<IProps> = ({ displayedName }) => {
  return <CardHolderName>{displayedName}</CardHolderName>;
};

export default CardNameBack;
