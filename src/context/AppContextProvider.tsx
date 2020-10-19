import React from 'react';
import AppContext from './AppContext';

import { formatDisplayedNumber } from '../utils/utils';

const initialCardNumber = '';
const initialDisplayedName = 'Your Name here';
const initalMonth = '';
const initalYear = '';
const initialDisplayed = '**** **** **** ****';

const AppContextProvider: React.FC = (props) => {
  const [cardNumber, setCardNumber] = React.useState<string>(initialCardNumber);
  const [holderName, setHolderName] = React.useState<string>('');
  const [month, setMonth] = React.useState<string>(initalMonth);
  const [year, setYear] = React.useState<string>(initalYear);
  const [validThru, setValidThru] = React.useState<string>('');
  const [cvv, setCvv] = React.useState<string>('');
  const [focusedInput, setFocusedInput] = React.useState<string | null>('cvv');

  const [displayedCardNumber, setDisplayedCardNumber] = React.useState(initialDisplayed);
  const [displayedName, setDisplayedName] = React.useState(initialDisplayedName);

  const value = {
    cardNumber,
    setCardNumber,
    holderName,
    setHolderName,
    month,
    setMonth,
    year,
    setYear,
    displayedCardNumber,
    setDisplayedCardNumber,
    displayedName,
    setDisplayedName,
    validThru,
    setValidThru,
    focusedInput,
    setFocusedInput,
    cvv,
    setCvv,
  };

  React.useEffect(() => {
    setDisplayedCardNumber(formatDisplayedNumber(cardNumber));
  }, [cardNumber]);

  React.useEffect(() => {
    if (holderName === '') {
      setDisplayedName(initialDisplayedName);
    } else {
      setDisplayedName(holderName);
    }
  }, [holderName]);

  React.useEffect(() => {
    const [month, year = ''] = validThru.split(' / ');
    setMonth(month);
    setYear(year);
  }, [validThru]);

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
