import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import '../css/SearchField.css';

class SearchField extends Component {
  render() {
    return (
      <Link to="Search">
        <div className="SearchField">
          <IoIosSearch/><text>Search bottle</text>
        </div>
      </Link>
    )
  }
};

export default SearchField;
