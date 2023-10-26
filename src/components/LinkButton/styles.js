import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../styles/theme";

export const Container = styled(Link)`
  margin-left: 2rem;
  display: flex;
  gap: .8rem;
  align-items: center;
  color: ${theme.pink._500};
  svg {
    stroke: ${theme.pink._500};
  }
`;