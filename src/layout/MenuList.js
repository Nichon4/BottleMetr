import styled from 'styled-components';
import React from  'react';
import {Link} from 'react-router-dom';


const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  position: relative;
  vertical-align: middle;
`;

export const MenuItem = styled.ul`
  position: absolute;
  width: 375px;
  height: 450px;
  background-color: #000000;
  list-style: none;
  padding-left: 0px;
  margin: 0;
  &:first-child {
    padding-top: 10px;
  }
`;

const MenuItemLi = styled.li`
  height: 32px;
  background-color: #8E8E93;
  margin: 0 0 2px 0;
  text-decoration: none;
  font-size: 20px;
  padding-left: 5px;
  &:visited {
    text-decoration: none;
  }
`;

export const MenuElement = ({name, link, icon}) => (
  <StyledLink key={link} to={link}>
    <MenuItemLi>
      {icon} <span> {name}</span>
    </MenuItemLi>
  </StyledLink>
);