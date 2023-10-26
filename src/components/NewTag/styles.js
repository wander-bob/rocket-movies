import styled from "styled-components";
import {theme} from "../../styles/theme";

export const Container = styled.button`
  padding: 1.6rem 2rem;
  background: ${theme.gray._600};
  border-radius: .8rem;
  display: flex;  
  align-items: center;
  gap: .8rem;

  > svg {
    stroke: ${theme.pink._500};
    font-size: 2.4rem;
  }
  &.new {
    background-color: transparent;
    border: 2px dashed ${theme.gray._300};
  }
`;