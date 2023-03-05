import PropTypes from 'prop-types';
import { Table, TableHead } from './Transactions.styled';
import TransactionRow from '../TransactionRow/TransactionRow';

export default function Transactions({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionRow
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </Table>
  );
}

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
