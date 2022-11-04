import styled from 'styled-components';

export const Button = styled.button`
  margin-left: 15px;
  background-color: white;
  border: 2px solid lightblue;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  font-size: 12px;

  :hover {
    background-color: #e7ffff;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    cursor: pointer;
  }
  :active {
    background-color: #c3e7e7;
  }
`;
