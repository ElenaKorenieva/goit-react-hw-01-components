import PropTypes from 'prop-types';

import {
  TransactionRow,
  TransactionType,
  TransactionAmount,
  TransactionCurrency,
} from './TransactionsList.styled';

export default function TransactionsListItem({ type, amount, currency }) {
  return (
    <TransactionRow>
      <TransactionType>{type}</TransactionType>
      <TransactionAmount>{amount}</TransactionAmount>
      <TransactionCurrency>{currency}</TransactionCurrency>
    </TransactionRow>
  );
}

TransactionsListItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};