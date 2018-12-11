import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";

export const SearchInputDiv = styled.div`
  display: block;
  background:  rgba(142, 142, 147, 0.15);
  color: #8E8E93;
  border-radius: 7px;
  position: relative;
  left: 10px;
  height: 23px;
  width: 345px;
  font-size: 15px;
  text-indent: 0px;
  align-items: center;
  text-decoration: none;
  padding-left: 10px;
  `;

export const SearchResultUl = styled.ul`
  position: absolute;
  top: 100px;
  background-color: #8E8E93;
  color: white;
  list-style: none;
  list-style-type: none;
  padding-left: 0px;
  height: 450px;
  width: 375px;
`;

const SearchResultLi = styled.li`
  margin: 2px 0 0 0;
  padding-top: 5px;
  padding-bottom: 2px;
  background-color: #000000;
  font-size: 17px;
  text-decoration: none;
  color: white;
  &:visited {
    text-decoration: none;
  }
`;

const BottleImg = styled.img`
  padding-left: 50px;
  transform: translate(-50%);
  width: auto;
`;

const BottleSpan = styled.span`
  font-size: 20px;
  position: absolute;
  left: 45px;
  padding-top: 4px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const ListItem = ({name, link, img}) => (
  <StyledLink to={`${link}`}>
    <SearchResultLi>
      <BottleImg src={img} alt={'bottleImage'}/>
      <BottleSpan>{name}</BottleSpan>
    </SearchResultLi>
  </StyledLink>
)
