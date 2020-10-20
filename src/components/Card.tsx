import React from 'react';
import AppContext from '../context/AppContext';
import DisplayExpiryDate from './DisplayExpiryDate';
import styled from 'styled-components';
import CardNumber from './CardNumber';
import image from '../assets/chip2.png';
import CardNumberBack from './CardNumberBack';
import CardCompanyIcon from './CardCompanyIcon';
import CardNameBack from './CardNameBack';

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

  perspective: 1000px;
`;

const CardBody = styled.div`
  position: absolute;
  width: 400px;
  height: 225px;
  border-radius: 10px;
  padding: 10px 40px;
  background-color: gray;
  box-shadow: 2px 5px 20px 5px rgba(0, 0, 0, 0.4);

  backface-visibility: hidden;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  transform: ${(props: CardBodyProps) => (props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(4, 1fr) minmax(60px, 1fr);
`;

const Chip = styled.div`
  width: 50px;
  height: 50px;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

const ChipImage = styled.img`
  width: 100%;
  height: 100%;
`;

const SvgIcon = styled.div`
  grid-column: 2/ 4;
  grid-row: 5 / 6;
  justify-self: end;
`;

const DisplayedName = styled.div`
  text-transform: uppercase;
  grid-column: 1 / 3;
  grid-row: 5 / -1;
  justify-self: start;
  align-self: center;

  color: transparent;

  text-shadow: -1px 1px 1px black;

  background-image: linear-gradient(45deg, rgba(200, 200, 200, 0.6), rgba(255, 255, 255, 0.4));
  background-clip: text;
  background-size: 100%;
  background-repeat: repeat;
`;

//  ------- CARD BACK --------- //

const CardBodyBack = styled.div`
  position: absolute;
  width: 400px;
  height: 225px;
  border-radius: 10px;
  padding: 10px 40px;
  background-color: gray;
  box-shadow: 2px 5px 20px 5px rgba(0, 0, 0, 0.4);

  backface-visibility: hidden;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  transform: ${(props: CardBodyProps) => (props.isFlipped ? 'rotateY(0deg)' : 'rotateY(-180deg)')};

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(4, 1fr) minmax(60px, 1fr);
`;

const Blackbar = styled.div`
  width: 400px;
  background-color: rgba(0, 0, 0, 0.8);
  height: 20px;
  margin-left: -40px;

  grid-column: 1 / -1;
  grid-row: 1 / 2;
`;

const SignaturAndCvv = styled.div`
  display: flex;

  grid-column: 1 / 3;
  grid-row: 2 / 4;

  align-self: center;
`;

const Signature = styled.div`
  position: relative;

  height: 40px;
  width: 250px;
  background-color: mintcream;

  margin-right: 8px;

  ::after {
    content: '';
    position: absolute;
    top: 8px;
    opacity: 0.2;
    width: 100%;
    background-color: blue;
    height: 2px;

    box-shadow: 0px 8px 0 blue;
  }

  ::before {
    content: '';
    position: absolute;
    top: 32px;
    opacity: 0.2;
    width: 100%;
    background-color: blue;
    height: 2px;

    box-shadow: 0px -8px 0 blue;
  }
`;

const Cvv = styled.div``;

const SilverChip = styled.div`
  background-color: silver;
  width: 40px;
  height: 40px;
  border-radius: 5px;

  grid-column: 1 / 2;
  grid-row: 5 / 6;
`;

const Card: React.FC = () => {
  const { displayedCardNumber, displayedName, month, year, focusedInput, cvv } = React.useContext(AppContext);
  return (
    <CardWrapper>
      <CardBody isFlipped={focusedInput === 'cvv'}>
        <Chip>
          <ChipImage src={image} alt="Chip" />
        </Chip>
        <CardNumber cardNumber={displayedCardNumber} focusedInput={focusedInput} />
        <DisplayedName data-testid="holderName">
          <p>{displayedName}</p>
        </DisplayedName>
        <DisplayExpiryDate month={month} year={year} focusedInput={focusedInput} />
        <SvgIcon>
          <CardCompanyIcon cardNumber={displayedCardNumber} />
        </SvgIcon>
      </CardBody>
      <CardBodyBack isFlipped={focusedInput === 'cvv'}>
        <Blackbar />
        <SignaturAndCvv>
          <Signature />
          <Cvv>{cvv}</Cvv>
        </SignaturAndCvv>
        <CardNumberBack cardNumber={displayedCardNumber} focusedInput={focusedInput} />
        <CardNameBack displayedName={displayedName} />
        <SilverChip />
      </CardBodyBack>
    </CardWrapper>
  );
};

export default Card;
