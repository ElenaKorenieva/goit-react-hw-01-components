import styled from 'styled-components';


export const List = styled.ul`
display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0px;
  gap: 10px;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 400px;
  padding: 20px;
  background-color: #ebecf0;
  box-shadow: 13px 13px 26px -9px rgba(0,0,0,0.55);
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.children ? `green` : `red`)};
`;

export const Image = styled.img`
  width: 50px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 24px;
`;