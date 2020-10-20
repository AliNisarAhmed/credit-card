import React from 'react';
import styled from 'styled-components';

interface IProps {
  month: string;
  year: string;
  focusedInput: string | null;
}

type ExpiryDateProps = Pick<IProps, 'focusedInput'>;

const ExpiryDateContainer = styled.div`
  align-self: center;
  grid-column: 1 / 3;
  grid-row: 4 / 5;
  justify-self: end;
  align-self: center;
  color: ${(props: ExpiryDateProps) => (props.focusedInput === 'validThru' ? 'white' : 'silver')};

  display: flex;

  font-size: 14px;
`;

const StyledLabel = styled.span`
  text-align: center;
  margin-bottom: 4px;
  margin-right: 10px;
  color: black;
`;

const ExpiryDate = styled.div`
  text-align: center;
  color: transparent;

  text-shadow: -1px 1px 1px black;

  background-image: linear-gradient(45deg, rgba(200, 200, 200, 0.6), rgba(255, 255, 255, 0.4));
  background-clip: text;
  background-size: 100%;
  background-repeat: repeat;
`;

const DisplayExpiryDate: React.FC<IProps> = ({ month, year, focusedInput }) => {
  const displayMonth = month.padEnd(2, '*');
  const displayedYear = year.padEnd(2, '*');

  return (
    <ExpiryDateContainer focusedInput={focusedInput}>
      <StyledLabel>Valid Thru:</StyledLabel>
      <ExpiryDate>
        {displayMonth} / {displayedYear}
      </ExpiryDate>
    </ExpiryDateContainer>
  );
};

export default DisplayExpiryDate;
