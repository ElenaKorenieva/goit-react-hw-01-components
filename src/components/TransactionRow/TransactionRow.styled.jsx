import styled from 'styled-components';

export const TransactionRowItem = styled.tr`
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
