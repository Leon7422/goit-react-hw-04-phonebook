import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 20px;
  border: 1px solid lightblue;
  border-radius: 10px;
  padding: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ButtonAdd = styled.button`
  width: 150px;
  background-color: white;
  border: 2px solid lightblue;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

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
