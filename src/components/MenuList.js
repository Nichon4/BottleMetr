import React from 'react';
import { IoIosListBox, IoIosBook, IoIosInformationCircle } from 'react-icons/io';
import { MenuItem, MenuElement } from '../layout/MenuList'

const menuItems = [
  { name: "Bottle List",
    link: "/BottleList",
    icon: (<IoIosListBox />)
  },
  { name: "Your Inventory",
    link: "/Inventory",
    icon: (<IoIosBook />)
  },
  { name: "About",
    link: "/about",
    icon: (<IoIosInformationCircle />)
  }
];

const MenuList = () => (
  <MenuItem >
    {
      menuItems.map((props) =>
        <MenuElement key={props.link} {...props}/> )
    }
  </MenuItem>
);

export default MenuList;
