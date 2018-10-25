import React, {Component} from 'react';
import { IoIosSearch } from 'react-icons/io';
import '../css/SearchField.css';

 class SearchField extends Component {
   render() {
    return (
      <div className="SearchField">
        <IoIosSearch/><text>Search bottle</text>
      </div>
    )
  }
};

export default SearchField;
