import styled from 'styled-components';
import {Link} from "react-router-dom";
import React from "react";


export const BottleUl = styled.ul`
  position: absolute;
  top: 100px;
  margin: 0;
  background-color: #8E8E93;
  list-style: none;
  padding-left: 0px;
  height: 450px;
  width: 375px;
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

const BottleValue = styled.span`
  font-size: 15px;
  position: absolute;
  right: 10px;
  padding-top: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const BottleListItem = ({name, link, img, curValue}) => (
  <StyledLink to={`BottleMetr/${link}`}>
    <BottleLi>
      <BottleImg src={img} alt={'bottleImage'}/>
      <BottleSpan>{name}</BottleSpan>
      <BottleValue>{curValue ? `${curValue}ml` : null }</BottleValue>
    </BottleLi>
  </StyledLink>
)