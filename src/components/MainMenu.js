import React from 'react';
import '../App.css';
import MenuList from '../components/MenuList.js';
import {Route} from 'react-router-dom';



const MainMenu = (props) => {
    return (
        <div className="MainMenu">
          <MenuList/>
        </div>
    );
  }

export default MainMenu;
