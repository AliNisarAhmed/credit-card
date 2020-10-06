import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

import CardNumber from '../../components/CardNumber';

test('Displays card number correctly', () => {
  const cardNumber = '4537 3731 1138 8015';
  const { container, getByText } = render(<CardNumber cardNumber={cardNumber} focusedInput={'cardNumber'} />);
  expect(container).toHaveTextContent(cardNumber);
  expect(getByText(cardNumber)).toBeInTheDocument();
  expect(getByText(cardNumber)).toHaveStyle('color: white');
});

test('should change color to silver when focusedInput is null', () => {
  const cardNumber = '4537 3731 1138 8015';
  const { container, getByText } = render(<CardNumber cardNumber={cardNumber} focusedInput={null} />);
  expect(container).toHaveTextContent(cardNumber);
  expect(getByText(cardNumber)).toHaveStyle('color: silver');
});
