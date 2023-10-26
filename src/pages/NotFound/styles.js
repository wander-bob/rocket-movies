import styled from "styled-components";
import {theme} from "../../styles/theme";

export const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2.4rem;
  > h1{
    font-size: 4.8rem;
    > span{
      font-size: 5.6rem;
      font-weight: 700;
      color: ${theme.pink._500};
    }
  }
  > p {
    font-size: 2.4rem;
  }
`;