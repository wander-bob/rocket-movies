import {FiStar} from "react-icons/fi";

import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  margin-top: .8rem;
  display: flex;
  gap: .6rem;
  > svg * {  
    stroke: ${theme.pink._500};
  }
`;
export const Star = styled(FiStar)`
  &:hover{
    transform: scale(1.1);
  }
`