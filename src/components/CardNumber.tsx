import React from 'react';
import styled from 'styled-components';

interface IProps {
  cardNumber: string;
  focusedInput: string | null;
}

interface CNTProps {
  focusedInput: string | null;
  'data-testid': string;
}

const CardNumberContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 3 / 4;
  align-self: end;

  padding: 0 20px;
`;

const CardNumberText = styled.p`
  font-size: 20px;
  color: transparent;

  text-shadow: -1px 1px 1px black;

  background-image: linear-gradient(45deg, rgba(200, 200, 200, 0.6), rgba(255, 255, 255, 0.8));
  background-clip: text;
  background-size: 100%;
  background-repeat: repeat;
`;

const CardNumber: React.FC<IProps> = ({ cardNumber, focusedInput }) => {
  return (
    <CardNumberContainer>
      <CardNumberText data-testid="cardNumberDisplay">{cardNumber}</CardNumberText>
    </CardNumberContainer>
  );
};

export default CardNumber;
