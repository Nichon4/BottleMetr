import React from 'react';
import {DebounceInput} from 'react-debounce-input';
import {IoIosSearch} from 'react-icons/io';
import { SearchInputDiv } from "./Layout";

class SearchInput extends React.Component {

  componentDidMount() {
    this.searchInput && this.searchInput.focus();
  }

  render() {
    return(
      <SearchInputDiv>
        <IoIosSearch />
        <DebounceInput
          minLength={1}
          debounceTimeout={500}
          placeholder="Search bottle"
          className="SearchInput"
          value={this.props.value}
          inputRef={(searchInput) => { this.searchInput = searchInput}}
          onChange={this.props.onChange} />
      </SearchInputDiv>
    )
  }
}

export default SearchInput;
