import React from 'react';
import { IoIosMenu } from 'react-icons/io';
import MenuList from '../MenuList';
import { connect } from 'react-redux';
import {showMenu} from "./actions";
import { SandwichBox, SandwichSwitcher } from "./Layout";

const mapStateToProps = state => ({
  isShown: state.sandwichSwitchR.sandwichVisible
});

const mapDispatchToProps = dispatch => ({
    toggleSandwich: (isShown) => dispatch(showMenu(isShown))
});

const SandwichMenu1 = ({isShown, toggleSandwich}) => {
  console.log(isShown);
    return (
        <SandwichBox onClick={() => toggleSandwich(isShown)} isShown={isShown}>
            <MenuList />
        </SandwichBox>
    )
};


const SandwichMenuButton1 = (props) => {
  console.log(props);
  return (
    <SandwichSwitcher onClick={() => props.toggleSandwich(props.isShown)}>
      <IoIosMenu />
    </SandwichSwitcher>
  )
};


export const SandwichMenuButton = connect(mapStateToProps, mapDispatchToProps)(SandwichMenuButton1);
export const SandwichMenu = connect(mapStateToProps, mapDispatchToProps)(SandwichMenu1);
