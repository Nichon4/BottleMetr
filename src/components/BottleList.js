import React from 'react';
import bottles from "../data/bottles.json";
import { BottleListItem, BottleUl } from "../layout/BottleList";

// TODO remove sorting and remap
const BottleList = () => {
  const bottleList = bottles
    .map(({brand, name, link, miniImg}) => ({brand, link, name, img: miniImg ? miniImg : "/img/no_mini.png" }))
    .sort((a,b) => (a.name > b.name))
    .sort((a,b) => (a.brand > b.brand))
    .map((bottle) => <BottleListItem key={bottle.link} {...bottle} />
  );

  return (
    <BottleUl>{bottleList}</BottleUl>
  )
};

export default BottleList;
