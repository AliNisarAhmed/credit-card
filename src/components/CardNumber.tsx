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
  grid-row: 2 / 3;
  align-self: end;
  margin-bottom: 10px;
`;

const CardNumberText = styled.div`
  font-size: 25px;
  color: ${(props: CNTProps) => (props.focusedInput === 'cardNumber' ? 'white' : 'silver')};
`;

const CardNumber: React.FC<IProps> = ({ cardNumber, focusedInput }) => {
  return (
    <CardNumberContainer>
      <CardNumberText data-testid="cardNumberDisplay" focusedInput={focusedInput}>
        {cardNumber}
      </CardNumberText>
    </CardNumberContainer>
  );
};

export default CardNumber;
