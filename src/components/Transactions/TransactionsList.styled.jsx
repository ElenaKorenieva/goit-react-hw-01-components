import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto 200px;
  background-color: #ebecf0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const TableHead = styled.th`
  background-color: #2a99f3;
  padding: 10px 50px;
`;

export const TransactionRow = styled.tr`
  height: 28px;
  text-align: center;
  transition: all 0.3s ease;
  &:nth-of-type(2n) {
    background-color: white;
  }
  &:hover {
    cursor: pointer;
    background-color: #a5a5b7;
  }
`;
export const TransactionType = styled.td`
  font-weight: 500;
`;
export const TransactionAmount = styled.td`
  font-weight: 300;
`;
export const TransactionCurrency = styled.td`
  font-weight: 400;
`;