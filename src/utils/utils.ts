import { init, last, take } from 'ramda';

export const formatValidThru = (prev: string, curr: string): string => {
  let c = curr.length;
  let p = prev.length;

  const lastCurrent = last(curr);

  if (isAlpha(lastCurrent)) return prev;

  if (curr !== '' && curr.trim() === '') {
    return prev;
  }

  if (c > 7) return prev;

  if (c > p) {
    if (p === 1) {
      return curr.concat(' / ');
    }
  } else if (c < p) {
    if (c === 5) {
      return take(2, curr);
    }
  }
  return curr;
};

export const formatCardNumber = (prev: string, current: string): string => {
  let c = current.length;
  let p = prev.length;

  const initCurrent = init(current);
  const lastCurrent = last(current);

  if (isAlpha(lastCurrent)) return prev;

  if (c > 19) {
    return prev;
  }

  if (current !== '' && current.trim() === '') {
    return prev;
  }

  if (c > p) {
    if (p === 3 || p === 8 || p === 13) {
      return current + ' ';
    } else if (p === 4 || p === 9 || p === 14) {
      return initCurrent + ' ' + lastCurrent;
    } else {
      return current;
    }
  } else if (c < p) {
    if (p === 6 || p === 11 || p === 16) {
      return initCurrent;
    }
  }

  return current;
};

export const formatCvv = (prev: string, current: string): string => {
  if (isAlpha(current)) return prev;

  if (current.length < prev.length) {
    return current;
  } else if (current.length > 3) {
    return prev;
  } else {
    return current;
  }
};

export const formatDisplayedNumber = (cardNumber: string): string => {
  const defaultDisplay = '**** **** **** ****';
  return cardNumber + defaultDisplay.slice(cardNumber.length);
};

export function isWhiteSpace(str: string): boolean {
  return /[\s]/.test(str);
}

export function isAlpha(str: string): boolean {
  return /[a-zA-Z]/g.test(str);
}

export type CardCompany = 'Visa' | 'MasterCard' | 'AmericanExpress';

export const getCardCompany = (cardNumber: string): CardCompany | null => {
  if (cardNumber.startsWith('5')) {
    return 'MasterCard';
  } else if (cardNumber.startsWith('4')) {
    return 'Visa';
  } else if (cardNumber.startsWith('3')) {
    return 'AmericanExpress';
  }

  return null;
};
