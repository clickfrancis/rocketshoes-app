import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  height: 15vh;
  align-items: center;
  padding: 0 10%;
`;

export const Cart = styled.div`
  strong {
    color: ${(props) => props.theme.colors.secondary};
    padding-right: 10px;
  }

  span {
    color: ${(props) => props.theme.colors.secondary};
    padding-right: 10px;
  }
`;
