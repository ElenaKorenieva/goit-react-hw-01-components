import styled from 'styled-components';

export const Section = styled.section`
  margin: 0 auto;
  width: 300px;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f7;
  box-shadow: 13px 13px 26px -9px rgba(0,0,0,0.55);
  transition: all 0.3s ease;
`;

export const Title = styled.h2`
    line-height: 1;
`;

export const StatListEl = styled.ul`
    display: flex;
    width: 100%;
    padding-bottom: 10px;
    list-style: none;
`;

export const ListItem = styled.li`
    display: flex;
    width: calc((100% / 4) - 30px);
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background-color: #edeff8;
    &:nth-of-type(2n) {
    background-color: #a8a8b5;
  }
`;

export const ItemLabel = styled.span`
    font-weight: 400;
`;

export const ItemPercentage = styled.span`
    font-weight: 700;
`;