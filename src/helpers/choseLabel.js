export const options = [
  { value: 'usd', label: '$ USD' },
  { value: 'eur', label: '€ EUR' },
  { value: 'uah', label: '₴ UAH' },
];

export const choseLabel = currency =>
  options.reduce((acc, cur) => (cur.value === currency ? cur.label : acc), '');
