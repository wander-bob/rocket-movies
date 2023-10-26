import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  padding: 1.9rem 2.4rem;
  width: 100%;
  background-color: ${theme.gray._700};
  color: ${theme.white._100};
  display: flex;
  gap: 1.2rem;
  border-radius: 1rem;
  > svg {
    font-size: 2.4rem;
    stroke: ${theme.gray._400};
  }
  > input {
    background-color: transparent;
    width: 100%;
    outline: none;
    color: ${theme.white};
    &::placeholder {
      color: ${theme.gray._400};
      font-size: 1.4rem;
    }
    
  }
`;