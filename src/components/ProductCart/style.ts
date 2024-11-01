import styled from "styled-components";
import TextField from "@mui/material/TextField/TextField";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  img {
    width: 200px;
    hidth: 200px;
  }
`;

export const GroupProduct = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  padding-left: 40px;
`;

export const AmountProduct = styled.div`
  display: flex;
`;

export const GroupAmount = styled.div`
  display: flex;
  align-items: center;

  div {
    padding: 0 20px 0 20px;
  }
`;

export const InputAmount = styled(TextField)`
  width: 100px;
  padding-left: 40px;

  & .MuiTextField-root {
    padding: 0 20px 0 20px !important;
  }

  & .MuiInputBase-input {
    text-align: center; /* Alinha o texto ao centro */
  }
`;
