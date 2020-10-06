import React from 'react';
import AppContext from '../context/AppContext';
import DisplayExpiryDate from './DisplayExpiryDate';
import styled from 'styled-components';
import CardNumber from './CardNumber';
import image from '../assets/chip2.png';

interface DisplayedNameProps {
  focusedInput: string | null;
  'data-testid': string;
}

interface CardBodyProps {
  isFlipped: boolean;
}

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 225px;
`;

const CardBody = styled.div`
  position: absolute;
  width: 400px;
  height: 225px;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: gray;
  box-shadow: 2px 5px 20px 5px rgba(0, 0, 0, 0.4);

  backface-visibility: hidden;
  transition: transform 500ms;
  transform-style: preserve-3d;
  transform: ${(props: CardBodyProps) => (props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 3fr 1fr;
`;

const CardBodyBack = styled.div`
  position: absolute;
  width: 400px;
  height: 225px;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: gray;
  box-shadow: 2px 5px 20px 5px rgba(0, 0, 0, 0.4);

  backface-visibility: hidden;
  transition: transform 500ms;
  transform-style: preserve-3d;
  transform: ${(props: CardBodyProps) => (props.isFlipped ? 'rotateY(0deg)' : 'rotateY(-180deg)')};
`;

const Chip = styled.div`
  background-image: url(${image});
  width: 40px;
  height: 40px;
  grid-column: 1/ 2;
  grid-row: 1 / 2;
`;

const SvgIcon = styled.div`
  width: 100px;
  height: 50px;
`;

const DisplayedName = styled.div`
  text-transform: uppercase;
  grid-column: 1 / 2;
  grid-row: 3 / -1;
  justify-self: start;
  align-self: center;

  color: ${(props: DisplayedNameProps) => (props.focusedInput === 'holderName' ? 'white' : 'silver')};
`;

const Card: React.FC = () => {
  const { displayedCardNumber, displayedName, month, year, focusedInput } = React.useContext(AppContext);
  return (
    <CardWrapper>
      <CardBody isFlipped={focusedInput === 'cvv'}>
        <Chip />
        <CardNumber cardNumber={displayedCardNumber} focusedInput={focusedInput} />
        <DisplayedName data-testid="holderName" focusedInput={focusedInput}>
          <p>{displayedName}</p>
        </DisplayedName>
        <DisplayExpiryDate month={month} year={year} focusedInput={focusedInput} />
      </CardBody>
      <CardBodyBack isFlipped={focusedInput === 'cvv'} />
    </CardWrapper>
  );
};

export default Card;
