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
  grid-column: 2 / -1;
  grid-row: 3 / -1;
  justify-self: end;
  align-self: center;
  color: ${(props: ExpiryDateProps) => (props.focusedInput === 'validThru' ? 'white' : 'silver')};
`;

const StyledLabel = styled.p`
  text-align: center;
  margin-bottom: 4px;
`;

const ExpiryDate = styled.div`
  text-align: center;
`;

const DisplayExpiryDate: React.FC<IProps> = ({ month, year, focusedInput }) => {
  const displayMonth = month.padEnd(2, '*');
  const displayedYear = year.padEnd(2, '*');

  return (
    <ExpiryDateContainer focusedInput={focusedInput}>
      <StyledLabel>Valid thru:</StyledLabel>
      <ExpiryDate>
        {displayMonth} / {displayedYear}
      </ExpiryDate>
    </ExpiryDateContainer>
  );
};

export default DisplayExpiryDate;
