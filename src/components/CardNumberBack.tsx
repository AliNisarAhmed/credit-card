import React from 'react';
import styled from 'styled-components';

interface IProps {
  cardNumber: string;
  focusedInput: string | null;
}

const CardNumberBackStyles = styled.p<{ focusedInput: string | null }>`
  grid-column: 1 / -1;
  grid-row: 4 / 5;

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
`;

const CardNumberBack: React.FC<IProps> = ({ cardNumber, focusedInput }) => {
  return <CardNumberBackStyles focusedInput={focusedInput}>{cardNumber}</CardNumberBackStyles>;
};

export default CardNumberBack;
