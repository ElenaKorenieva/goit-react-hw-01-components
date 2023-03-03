import styled from 'styled-components';

export const Card = styled.div`
  margin: 0 auto 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 300px;
  padding: 15px 0 0;
  border-radius: 2px;
  background-color: #f7f8fd;
  box-shadow: 13px 13px 26px -9px rgba(0,0,0,0.55);
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
`;

export const Avatar = styled.img`
  display: block;
  width: 100px;
  height: auto;
  border-radius: 50%;
  border: 1px solid #696c6c;
  background-color: #ebf0f0;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

export const Tag = styled.p`
  font-size: 14px;
  color: #a5a8a8;
`;

export const Location = styled.p`
  font-weight: 500;
`;

export const Stats = styled.ul`
  width: 100%;
  display: flex;
  gap: 20px;
  padding: 15px 0;
  justify-content: space-around;
  list-style: none;
  background-color: #d8d8ec;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const StatsLabel = styled.span`
  font-weight: 300;
`;
export const StatsQuantity = styled.span`
  font-weight: 600;
`;