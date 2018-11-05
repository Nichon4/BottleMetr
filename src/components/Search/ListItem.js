import React from 'react';
import {Link} from 'react-router-dom';

const ListItem = ({link, img, name}) => (
      <Link to={link}>
        <li key={link}>
          <img src={img} />
          <span>{name}</span>
        </li>
      </Link>
);

export default ListItem;
