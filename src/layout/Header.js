import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

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
  display: inline-block;
  position: relative;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
`;

export const AppHeader = styled.div`
  background-color: black;
  display: block;
  flex-direction: column;
  align-items: normal;
  justify-content: start;
  font-size: 30px;
  color: white;
  height: 100px;
`;


export const Header = ({text}) => (
  <HeaderBox>
    <Link to="/" className="App-link">
      <div>
        <HeaderLogo src={logo} alt={"logo"} />
        <HeaderIcoSpan> {text} </HeaderIcoSpan>
      </div>
    </Link>
  </HeaderBox>
);