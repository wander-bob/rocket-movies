import styled from "styled-components";
import {theme} from "../../styles/theme";

export const Container = styled.textarea`
  margin-top: 2rem;
  width: 100%;
  min-height: 24rem;
  resize: none;
  background-color: ${theme.gray._700};
  border-radius: 1rem;
  padding: 1.6rem 2rem;
  &::placeholder {
    color: ${theme.gray._400};
  }
`;