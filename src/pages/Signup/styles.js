import styled from "styled-components";
import imgBackground from "../../assets/background.png";
import {theme} from "../../styles/theme";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Form = styled.form`
  padding: 0 13.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 4.8rem;
    color: ${theme.pink._500};
  }
  > small {
    font-size: 1.4rem;
    margin-bottom: 4.8rem;
    width: 100%;
    text-align: left;
  }
  > fieldset {
    legend {
      margin-bottom: 4.8rem;
      text-align: left;
      font-size: 2.4rem;
      font-weight: 500;
    }
    border: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .8rem;
    a {
      margin-top: .8rem;
    }
  }
  > a {
    margin-block: 2.4rem;
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${imgBackground}) no-repeat; 
  background-size: cover;
  border: none;
`;