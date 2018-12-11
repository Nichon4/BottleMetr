import React from 'react';
import { ListItem, SearchResultUl } from "./Layout";


const SearchResult =({searchResult}) => (
  <div>
    <SearchResultUl>
      {
        searchResult.map( ({link, name, miniImg}) =>
          <ListItem key={link} name={name} link={`BottleMetr/${link}`} img={miniImg} />
        )
      }
    </SearchResultUl>
  </div>
);

export default SearchResult;
