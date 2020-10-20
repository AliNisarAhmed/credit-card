import React from 'react';

interface IAppContext {
  cardNumber: string;
  holderName: string;
  month: string;
  year: string;
  validThru: string;
  displayedCardNumber: string;
  displayedName: string;
  cvv: string;
  setValidThru: React.Dispatch<React.SetStateAction<string>>;
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  setHolderName: React.Dispatch<React.SetStateAction<string>>;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  setDisplayedCardNumber: React.Dispatch<React.SetStateAction<string>>;
  setDisplayedName: React.Dispatch<React.SetStateAction<string>>;
  setCvv: React.Dispatch<React.SetStateAction<string>>;
  focusedInput: string | null;
  setFocusedInput: React.Dispatch<React.SetStateAction<string | null>>;
}

const initialContext: IAppContext = {
  cardNumber: '',
  holderName: '',
  month: 'MM',
  year: 'YY',
  setCardNumber: () => {},
  setHolderName: () => {},
  setMonth: () => {},
  setYear: () => {},
  displayedCardNumber: '',
  setDisplayedCardNumber: () => {},
  displayedName: '',
  setDisplayedName: () => {},
  validThru: '',
  setValidThru: () => {},
  focusedInput: null,
  setFocusedInput: () => {},
  cvv: '',
  setCvv: () => {},
};

const AppContext = React.createContext<IAppContext>(initialContext);

export default AppContext;
