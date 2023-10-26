import styled from "styled-components";
import {theme} from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
  gap: .9rem;
  > .profile-info {
    max-width: 12rem;
    > strong {
      font-weight: 700;
      font-size: 1.4rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    > a {
      display: block;
      text-align: end;
      color: ${theme.gray._400};
      font-size: 1.4rem;
    }
  }
  
  > a {
    &:hover {
      filter: unset;
    }
    > img {
      height: 6.4rem;
      width: 6.4rem;
      border-radius: 50%;
    }
  }

`;