import React from 'react';
import {Link} from 'react-router-dom';


const MenuList = props => {

  const menuItems = {
    BottleMetr: "BottleMetr",
    BottleList: "Bottle List",
    Inventory: "Your Inventory",
    About: "About"
  };

  const menuList = Object.keys(menuItems).map((obj) =>
    <li key={obj}><Link to={obj}>{menuItems[obj]}</Link></li>
  );

  console.log(menuList);

  return (
    <ul>{menuList}</ul>
  );

}

export default MenuList;
