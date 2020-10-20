import React from 'react';
import AppContext from '../context/AppContext';
import styled from 'styled-components';
import { formatCardNumber, formatCvv, formatValidThru } from '../utils/utils';

interface IProps {}

type InputNames = 'cardNumber' | 'holderName';

const FormContainer = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const FormElement = styled.form`
  width: 50%;
`;

const FormItemContainer = styled.div`
  padding: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLabel = styled.label`
  font-size: 20px;
  color: white;
`;

const StyledInput = styled.input`
  padding: 10px 15px;
  color: steelblue;
  font-size: 20px;
  outline: none;
  border: 4px solid transparent;
  border-radius: 4px;

  justify-self: flex-end;

  background-color: rgba(0, 0, 0, 0.7);

  max-width: 300px;

  &:focus {
    border: 4px solid blue;
  }
`;

const StyledInputSmall = styled(StyledInput)`
  max-width: 110px;
`;

const Form: React.FC<IProps> = () => {
  const {
    cardNumber,
    setCardNumber,
    holderName,
    setHolderName,
    validThru,
    setValidThru,
    setFocusedInput,
    cvv,
    setCvv,
  } = React.useContext(AppContext);

  return (
    <FormContainer>
      <FormElement onSubmit={onFormSubmit}>
        <FormItemContainer>
          <StyledLabel htmlFor="cardNumber">Card Number</StyledLabel>
          <StyledInput
            id="cardNumber"
            name="cardNumber"
            type="text"
            placeholder="1234 1234 1234 1234"
            onChange={handleChange}
            value={cardNumber}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
          />
        </FormItemContainer>
        <FormItemContainer>
          <StyledLabel htmlFor="holderName">Holder's Name</StyledLabel>
          <StyledInput
            id="holderName"
            name="holderName"
            type="text"
            placeholder="Your name"
            onChange={handleChange}
            value={holderName}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
          />
        </FormItemContainer>
        <FormItemContainer>
          <StyledLabel htmlFor="expiryMonth">Expiration Date</StyledLabel>
          <StyledInputSmall
            id="validThru"
            name="expiryMonth"
            type="text"
            placeholder="MM / YY"
            onChange={handleValidThru}
            value={validThru}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
          />
        </FormItemContainer>
        <FormItemContainer>
          <StyledLabel htmlFor="cvv">CVV</StyledLabel>
          <StyledInputSmall
            id="cvv"
            type="text"
            placeholder="XXX"
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            onChange={handleCvvChange}
            value={cvv}
          />
        </FormItemContainer>
      </FormElement>
    </FormContainer>
  );

  function onInputFocus(e: React.FocusEvent<HTMLInputElement>) {
    const { id } = e.currentTarget;
    setFocusedInput(id);
  }

  function onInputBlur() {
    setFocusedInput(null);
  }

  function handleValidThru(e: React.FormEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;
    setValidThru((prev) => formatValidThru(prev, value));
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>): void {
    const { name, value } = e.currentTarget as {
      name: InputNames;
      value: string;
    };
    if (name === 'cardNumber') {
      setCardNumber((prev) => formatCardNumber(prev, value));
    } else if (name === 'holderName') {
      setHolderName(value);
    }
  }

  function handleCvvChange(e: React.FormEvent<HTMLInputElement>): void {
    const { value } = e.currentTarget;

    setCvv((prev) => formatCvv(prev, value));
  }

  function onFormSubmit(val: any) {
    console.log(val);
  }
};

export default Form;
