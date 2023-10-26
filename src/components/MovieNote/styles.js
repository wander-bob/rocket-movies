import { Link } from "react-router-dom";
import styled from "styled-components";
import {theme} from "../../styles/theme";

export const Container = styled(Link)`
  background-color: ${theme.pink._400};
  border-radius: 1.6rem;
  margin-block: 1.2rem;
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  > h2 {
    font-size: 2.4rem;
  }
  > span {
    margin-block: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover {
    outline: 1px solid ${theme.pink._600};
  }
`;
export const TagsContainer = styled.div`
  display: flex;
  gap: .8rem;
`;