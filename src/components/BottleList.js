import React from 'react';
import bottles from "../data/bottles.json";
import { BottleListItem, BottleUl } from "../layout/BottleList";

// TODO remove sorting and remap
const BottleList = () => {
  const bottleList = bottles
    .map(({name, link, miniImg}) => ({ link, name, img: miniImg ? miniImg : "/img/no_mini.png" }))
    .sort((a,b) => (a.name > b.name))
    .map((bottle) => <BottleListItem key={bottle.link} {...bottle} />
  );

  return (
    <BottleUl>{bottleList}</BottleUl>
  )
};

export default BottleList;
