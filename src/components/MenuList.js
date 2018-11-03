import React from 'react';
import {Link} from 'react-router-dom';
import "../css/MenuList.css";
import { IoIosListBox, IoIosBook, IoIosInformationCircle } from 'react-icons/io';

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

const MenuList = () => (
  <ul className="MenuList">
    {
      menuItems.map((obj) =>
        <Link key={obj.link} to={obj.link}>
          <li>
            {obj.icon} <span> {obj.name}</span>
          </li>
        </Link>
      )
    }
  </ul>
);

export default MenuList;
