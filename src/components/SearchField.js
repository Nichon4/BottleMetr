import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import '../css/SearchField.css';
import { SearchFieldDiv } from "../layout/SearchField.js";

class SearchField extends Component {
  render() {
    return (
      <SearchFieldDiv>
        <Link to="Search" className="SearchField">
          <div>
            <IoIosSearch/><span>Search bottle</span>
          </div>
        </Link>
      </SearchFieldDiv>
    )
  }
};

export default SearchField;
