import styled from "styled-components";

export const Card = styled.div`
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 5px;
  justify-content: space-between;
  margin-bottom: 30px;
`;
