import React from 'react';
import {Link} from 'react-router-dom';
import bottles from "../data/bottles.json";
import "../css/BottleList.css";

const BottleList = props => {
  const bottleItemsGet = Object.keys(bottles).reduce((acc, cur, idx) => {
    acc.push(
      {
        "link": cur,
        "name": bottles[cur].name,
        "img": ((bottles[cur].miniImg !== undefined ) ? bottles[cur].miniImg : "/img/no_mini.png" )
      }
    );
    return acc;
  }, [])

  const bottleItems = bottleItemsGet.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

  const bottleList = bottleItems.map((obj) =>
    <li key={obj.link}>
      <Link to={`BottleMetr/${obj.link}`}>
        <img src={obj.img} />
        <text>{obj.name}</text>
      </Link>
    </li>
  );

  return (
    <ul className="BottleList">{bottleList}</ul>
  )
}

export default BottleList;
