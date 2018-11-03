import React from 'react';
import ListItem from "./ListItem";


const SearchResult =({searchResult}) => (
  <div>
    <ul className="SearchResult">
      {
        searchResult.map( ({link, name, miniImg}) =>
          <ListItem key={link} name={name} link={`BottleMetr/${link}`} img={miniImg} />
        )
      }
    </ul>
  </div>
);

export default SearchResult;
