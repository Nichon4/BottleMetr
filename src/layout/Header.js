import styled from 'styled-components';
import React from 'react';
import logo from '../logo.svg';

const HeaderLogo = styled.img`
  height: 40px;
  position: relative;
  top: 4px;
  border: 10px;
`;
const HeaderIcoSpan = styled.span`
  padding-left: 5px;
`;

const HeaderBox = styled.div`
`;

export const AppHeader = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  font-size: calc(10px + 2vmin);
  color: white;
  margin-left: 10px;
`;


export const Header = ({text}) => (
  <HeaderBox>
    <HeaderLogo src={logo} alt={"logo"} />
    <HeaderIcoSpan> {text} </HeaderIcoSpan>
  </HeaderBox>
);