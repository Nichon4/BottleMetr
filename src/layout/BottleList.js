import styled from 'styled-components';
import {Link} from "react-router-dom";
import React from "react";


export const BottleUl = styled.ul`
  margin: 0;
  background-color: #8E8E93;
  list-style: none;
  padding-left: 0px;
  height: 450px;
`;

const BottleLi = styled.li`
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

export const BottleListItem = ({name, link, img}) => (
  <BottleLi>
    <StyledLink to={`BottleMetr/${link}`}>
    <BottleImg src={img} alt={'bottleImage'}/>
    <BottleSpan>{name}</BottleSpan>
  </StyledLink>
</BottleLi>)