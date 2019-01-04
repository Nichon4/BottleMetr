import React from 'react';
import bottles from "../data/bottles.json";
import { BottleListItem, BottleUl } from "../layout/BottleList";
import { loadData } from "./dataTransfer";
//TODO: edit bottle list
// TODO remove sorting and remap
const Inventory = () => {
  const favorites = loadData("favorites");

  console.log(Object.keys(favorites));
  const bottleList = bottles
    .filter( ({ link }) => Object.keys(favorites).length ? favorites[link] : true )
    .map(({name, link, miniImg}) => ({
      link, name,
      img: miniImg ? miniImg : "/img/no_mini.png",
      curValue: favorites[link] ? favorites[link].value : null,
    }))
    .sort((a,b) => (a.name > b.name))
    .map((bottle) => <BottleListItem key={bottle.link} {...bottle} />
    );

  return (
    <BottleUl>{bottleList}</BottleUl>
  )
};

export default Inventory;
