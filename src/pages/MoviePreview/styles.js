import styled from "styled-components";
import {theme} from "../../styles/theme";

export const Container = styled.div`
`;
export const Content = styled.div`
    padding: 2.4rem 8rem;
  .title-content {
    margin: 2.4rem 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .title-content > h1 {
    font-size:3.6rem;
    font-weight: 500;
  }
  .posted-by {
    margin-block: 2rem 4rem;
    display: flex;
    align-items: center;
    gap: .8rem;
    text-align: justify;
    > img {
      height: 1.6rem;
      width: 1.6rem;
      border-radius: 50%;
    }
    > svg {
      stroke: ${theme.pink._500};
    }
  }
`;
export const TagsContainer = styled.div`
  display: flex;
  gap: .8rem;
  margin-bottom: 1.6rem;
`;