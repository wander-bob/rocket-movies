import styled from "styled-components";
import {theme} from "../../styles/theme";

export const Container = styled.div`
  max-height: 100vh;
`;
export const Title = styled.div`
  padding: 4rem 11.4rem;
  display: flex;
  justify-content: space-between;
  > h1 {
    font-size: 3.2rem;
    font-weight: 400;
  }
`;
export const Content = styled.main`
  padding: 0rem 8rem;
  overflow: hidden;
`;