import React from 'react';
import {Link} from 'react-router-dom';
import "../css/MenuList.css";
import { IoIosListBox, IoIosBook, IoIosInformationCircle } from 'react-icons/io';

const MenuList = props => {

  const menuItems = [
    { name: "BottleMetr",
      link: "BottleMetr"
    },
    { name: "Bottle List",
      link: "BottleList",
      icon: (<IoIosListBox />)
    },
    { name: "Your Inventory",
      link: "Inventory",
      icon: (<IoIosBook />)
    },
    { name: "About",
      link: "about",
      icon: (<IoIosInformationCircle />)
    }
  ];

  const menuList = menuItems.map((obj) =>
    <Link to={obj.link}><li key={obj.link}>{obj.icon}<text> {obj.name}</text></li></Link>
  );

  console.log(menuList);

  return (
    <ul className="MenuList">{menuList}</ul>
  );

}

export default MenuList;
