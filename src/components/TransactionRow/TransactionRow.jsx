import PropTypes from 'prop-types';

import {
  TransactionRowItem,
  TransactionType,
  TransactionAmount,
  TransactionCurrency,
} from '../TransactionRow/TransactionRow.styled';

export default function TransactionRow({ type, amount, currency }) {
  return (
    <TransactionRowItem>
      <TransactionType>{type}</TransactionType>
      <TransactionAmount>{amount}</TransactionAmount>
      <TransactionCurrency>{currency}</TransactionCurrency>
    </TransactionRowItem>
  );
}

TransactionRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
