import React from 'react';
import App from '../../App';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { render, wait } from '@testing-library/react';
import 'jest-styled-components';

describe('Testing user input', () => {
  test('should highlight the cardNumber on card when user inputs', async () => {
    const { getByLabelText, getByTestId } = render(<App />);
    const cardNumberInput = getByLabelText(/card number/i);
    const cardNumberDisplay = getByTestId('cardNumberDisplay');
    const cardNumber = '123456';
    await wait(() =>
      user.type(cardNumberInput, cardNumber, {
        allAtOnce: false,
        delay: 10,
      }),
    );
    expect(cardNumberInput).toHaveValue('1234 56');
    expect(cardNumberDisplay).toHaveTextContent('1234 56** **** ****');
    expect(cardNumberDisplay).toHaveStyle(`color: white`); // can't test this
  });
  test('should highlight the holderName on card when user inputs', () => {
    const { getByLabelText, getByTestId } = render(<App />);
    const holderNameInput = getByLabelText(/holder's name/i);
    const holderNameDisplay = getByTestId('holderName');
    const holderName = 'Ali Ahmed';
    user.type(holderNameInput, holderName);
    expect(holderNameInput).toHaveValue(holderName);
    expect(holderNameDisplay).toHaveTextContent(holderName);
    // expect(holderNameDisplay).toHaveStyle(`color: white`); can't test this
  });
});
