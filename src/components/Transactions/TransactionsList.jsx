import PropTypes from 'prop-types';
import { Table, TableHead } from './TransactionsList.styled';
import TransactionsListItem from './TransactionsListItem';

export default function Transactions({items}) {
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
          <TransactionsListItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
  </tbody>
</Table>
    )
}

Transactions.propTypes = {
    items: PropTypes.array.isRequired,
  };