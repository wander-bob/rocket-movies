import styled from "styled-components";
import {theme} from "../../styles/theme";

export const Container = styled.header`
  padding: 2.4rem 12.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6.4rem;
  border-bottom: 1px solid ${theme.gray._500};
  > h2 {
    font-size: 2.4rem;
    color: ${theme.pink._500};
  }
`;