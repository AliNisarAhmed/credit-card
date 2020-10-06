import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import DisplayExpiryDate from '../../components/DisplayExpiryDate';

test('Renders month correctly', () => {
  const month = '04';
  const year = '23';
  const { container } = render(<DisplayExpiryDate month={month} year={year} focusedInput={null} />);
  expect(container).toHaveTextContent(/valid thru:04 \/ 23/i);
});
