import React from 'react';
import SearchInput from "./SearchInput.js";
import SearchResult from "./SearchResult.js";
import bottles from "../../data/bottles.json";
import "../../css/Search.css";

class Search extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchRequest: "",
      searchResult: [],
      searchResultLimit: 10
    };

    this.handeSearchInputChange = this.handeSearchInputChange.bind(this);
    this.searchMethod = this.searchMethod.bind(this);
  }

  componentDidMount(){
    this.setState({searchResult: this.searchMethod(this.state.searchRequest)})
  }

  handeSearchInputChange(event) {
    this.setState({
      searchRequest: event.target.value,
      searchResult: this.searchMethod(event.target.value)
    });
  }

  searchMethod(searchRequest) {
    return bottles
      .filter(({name}) => name.toLowerCase().includes(searchRequest.toLowerCase()) )
      .sort((a,b) => a.name > b.name)
      .slice(0, this.state.searchResultLimit);
  }

  render() {
    return (
      <div>
        <SearchInput
          onChange={this.handeSearchInputChange}
          value={this.state.searchRequest}
        />
        <SearchResult
          searchRequest={this.state.searchRequest}
          searchResult={this.state.searchResult}
        />
      </div>
    )
  }
}

export default Search;
