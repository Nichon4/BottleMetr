import React from 'react';
import {Link} from 'react-router-dom';
import {SearchResultLi} from './Layout';

const ListItem = ({link, img, name}) => (
      <Link to={link}>
        <SearchResultLi key={link}>
          <img src={img} alt={'bottleImage'}/>
          <span>{name}</span>
        </SearchResultLi>
      </Link>
);

export default ListItem;
