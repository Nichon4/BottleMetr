import React from 'react';
import { IoIosMenu } from 'react-icons/io';
import MenuList from '../MenuList';
import { connect } from 'react-redux';
import {showMenu} from "./actions";
import { SandwichBox, SandwichSwitcher } from "./Layout";

const mapStateToProps = state => ({
  isShown: state.sandwichSwitch.sandwichVisible
})

const mapDispatchToProps = dispatch => ({
    toggleSandwich: (isShown) => dispatch(showMenu(isShown))
})

const SandwichMenu1 = ({isShown, toggleSandwich}) => {
    return (
        <SandwichBox isShown={isShown} onClick={() => toggleSandwich(isShown)}>
            <MenuList />
        </SandwichBox>
    )
}


const SandwichMenuButton1 = (props) => {
  return (
    <SandwichSwitcher onClick={() => props.toggleSandwich(props.isShown)} location={props.location}>
      <IoIosMenu />
    </SandwichSwitcher>
  )
}


export const SandwichMenuButton = connect(mapStateToProps, mapDispatchToProps)(SandwichMenuButton1);
export const SandwichMenu = connect(mapStateToProps, mapDispatchToProps)(SandwichMenu1);
