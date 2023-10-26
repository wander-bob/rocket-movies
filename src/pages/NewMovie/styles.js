import styled from "styled-components";
import {theme} from "../../styles/theme";

export const Container = styled.div`
`;
export const Content = styled.div`
  margin-top: 2.4rem;
  padding-inline: 8rem;
  h2 {
    margin: 2rem;
    font-size: 3.6rem;
  }
  h3 {
    margin-block: 2.4rem;
    font-size: 2rem;
  }
  .input-wrapper{
    display: grid;
    gap: 4rem;
    grid-template-columns: 80% auto;
  }
`;
export const NewTagContainer = styled.div`
  background-color: ${theme.gray._900};
  padding: 1.6rem;
  border-radius: 1rem;
  display: flex;
  gap: 2.4rem;
`;
export const ButtonsContainer = styled.div`
  margin-block: 2.4rem;

  gap: 4rem;
  display: grid;
  grid-template-columns: 50% auto;
  > button {
    width: 100%;
  }
`;