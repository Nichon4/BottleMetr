import React from 'react';
import {DebounceInput} from 'react-debounce-input';
import {IoIosSearch} from 'react-icons/io';

class SearchInput extends React.Component {


  render() {
    return(
      <div className="SearchField">
        <IoIosSearch />
        <DebounceInput
          minLength={2}
          debounceTimeout={300}
          placeholder="Search bottle"
          className="SearchInput"
          onChange={this.props.onChange} />
      </div>
    )
  }
}

export default SearchInput;
