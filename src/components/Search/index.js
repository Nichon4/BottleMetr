import React from 'react';
import SearchInput from "./SearchInput.js";
import SearchResult from "./SearchResult.js";
import bottles from "../../data/bottles.json";
import ListItem from "./ListItem.js";
import "../../css/Search.css";

class Search extends React.Component {

  state = {
    searchRequest: "",
    searchResult: []
  }

  handeSearchInputChange = (event) => () => this.setState({ searchRequest: event.target.value, searchResult: this.searchMethod(event.target.value) })


  searchMethod = (searchRequest) => { bottles.filter( (obj) => obj.name.toLowerCase().includes(this.state.searchRequest.toLowerCase()) )
    .map( (obj, idx) => <ListItem key={idx + "_" + obj.link} name={obj.name} link={obj.link} img={obj.miniImg} /> );
  }

  render() {
    return (
      <div>
        <SearchInput onChange={this.handeSearchInputChange} />
        <SearchResult searchRequest={this.state.searchRequest}
          searchResult={this.state.searchResult}
          />
      </div>
    )
  }
}

export default Search;
