import styled from "styled-components";
import {theme} from "../../styles/theme";

export const Container = styled.div`
  display: grid;
`;
export const Header = styled.header`
  background-color: ${theme.pink._400};
  min-height: 14rem;
  display: flex;
  > a {
    margin-left: 11.4rem;
  }
`;
export const ProfileSettings = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: .8rem;
  padding-inline: 36rem;
  > img {
    margin: -17% auto 1.6rem auto ;
    border-radius: 50%;
    height: 20rem;
    width: 20rem;
  }
  a {
    margin-top: 1.6rem; 
  }
  > div {
    &:nth-child(4){
      margin-top: 1.6rem;
    }
  }
`