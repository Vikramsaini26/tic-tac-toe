import styled from "styled-components";

export const AppMain = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  text-align: center;

  color: white;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Square = styled.div`
  border: 2px solid #000000;
  min-width: 100px;
  min-height: 100px;
  font-size: 64px;
  color: #000000;
  padding: 30px;
`;

export const Button = styled.button`
  margin-top: 40px;
  border: 2px solid #000000;
  font-size: 16px;
  color: #ffffff;
  background-color: #000000;
  padding: 16px;
  border-radius: 15px;
`;
