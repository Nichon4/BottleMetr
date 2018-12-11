import styled from 'styled-components'
import {Link} from "react-router-dom";

export const SearchFieldDiv = styled.div`
  display: block;
  background:  rgba(142, 142, 147, 0.15);
  color: #8E8E93;
  border-radius: 7px;
  position: relative;
  left: 10px;
  bottom: -30px;
  height: 23px;
  width: 345px;
  font-size: 15px;
  text-indent: 0px;
  align-items: center;
  text-decoration: none;
   &:visited {
    text-decoration: none;
  }
  padding-left: 10px;
`;

export const StyledSearchLink = styled(Link)`
  text-decoration: none;
  
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const SearchTextDecorationDiv = styled.div`
  color: #8E8E93;
  vertical-align: middle;
  text-decoration: none;
  
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
`;

export const SearchSpan = styled.span`
  text-decoration: none;
  
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;