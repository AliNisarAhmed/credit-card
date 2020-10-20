import React from 'react';
import styled from 'styled-components';
import visa from '../assets/visa.svg';
import mastercard from '../assets/master-card.svg';
import americanexpress from '../assets/american-express.svg';
import { getCardCompany } from '../utils/utils';

interface IProps {
  cardNumber: string | null;
}

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

const CardCompanyIcon: React.FC<IProps> = ({ cardNumber }) => {
  if (!cardNumber) {
    return null;
  }

  const cardCompany = getCardCompany(cardNumber);

  if (!cardCompany) {
    return null;
  }

  if (cardCompany === 'AmericanExpress') {
    return <Icon src={americanexpress} alt="American Express Icon" />;
  }

  if (cardCompany === 'Visa') {
    return <Icon src={visa} alt="Visa Icon" />;
  }

  return <Icon src={mastercard} alt="MasterCard Icon" />;
};

export default CardCompanyIcon;
