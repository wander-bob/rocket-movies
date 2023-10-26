import styled from "styled-components";
import {Link} from "react-router-dom";
import {theme} from "../../styles/theme";

export const Container = styled(Link)`
  padding: 1.6rem 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  border-radius: .8rem;
  background-color: ${theme.pink._500};
  color: ${theme.gray._900};
  > svg * {
    color: ${theme.gray._900};
    height: 1.6rem;
    width: 1.6rem;
  }
  &.exclude {
    background-color: ${theme.gray._900};
    color: ${theme.pink._500};
  }
`;
