import React from 'react';
import {Link} from 'react-router-dom';
import bottles from "../data/bottles.json";
import "../css/Search.css";
import { IoIosSearch } from 'react-icons/io';
import {DebounceInput} from 'react-debounce-input';


class Search extends React.Component {

  state = {
    searchRequest: ''
  };

  SearchResult = () => {
    let Result = bottles.map( (obj) => (
      ( obj.name.toLowerCase().includes(this.state.searchRequest.toLowerCase()) ) ? (
        <li key={obj.link}>
          <Link to={`BottleMetr/${obj.link}`}>
            <img src={obj.miniImg} alt="bottleImage"/>
            <span>{obj.name}</span>
          </Link>
        </li>
      ) : ''
    ));

    return (
      <ul className="SearchResult">{Result}</ul>
    )
  };

  render() {
    return (
      <div>
        <div className="SearchField">
          <IoIosSearch />
          <DebounceInput
            minLength={2}
            debounceTimeout={300}
            placeholder="Search bottle"
            className="SearchInput"
            onChange={event => {this.setState({searchRequest: event.target.value})}} />
        </div>
        <div className="SearchResult">
          <this.SearchResult />
        </div>
      </div>
    );
  }
};

export default Search;
