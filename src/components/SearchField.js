import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import '../css/SearchField.css';
import { SearchFieldDiv, SearchTextDecorationDiv, SearchSpan } from "../layout/SearchField.js";

class SearchField extends Component {
  render() {
    return (
      <SearchFieldDiv>
        <Link to="Search">
          <SearchTextDecorationDiv>
            <IoIosSearch/><SearchSpan>Search bottle</SearchSpan>
          </SearchTextDecorationDiv>
        </Link>
      </SearchFieldDiv>
    )
  }
};

export default SearchField;
