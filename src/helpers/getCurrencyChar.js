export function getCurrencyChar(currency) {
  switch (currency) {
    case 'usd':
      return '$';
    case 'eur':
      return '€';
    case 'uah':
      return '₴';
    default:
      break;
  }
}
