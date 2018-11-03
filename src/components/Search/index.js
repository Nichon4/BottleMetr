import React from 'react';
import SearchInput from "./SearchInput.js";
import SearchResult from "./SearchResult.js";
import bottles from "../../data/bottles.json";
import "../../css/Search.css";

class Search extends React.Component {

  state = {
    searchRequest: "",
    searchResult: [],
    searchResultLimit: 5
  }

  handeSearchInputChange = (event) => this.setState({ searchRequest: event.target.value, searchResult: this.searchMethod(event.target.value) })


  searchMethod = (searchRequest) => {
    let result = bottles.filter( ({name,link,miniImg}) => name.toLowerCase().includes(searchRequest.toLowerCase()) )
                        .sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    result.length = this.state.searchResultLimit;
    return result;
  }


  componentDidMount(){
    this.setState({searchResult: this.searchMethod(this.state.searchRequest)})
  }

  render() {
    return (
      <div>
        <SearchInput onChange={this.handeSearchInputChange} value={this.state.searchRequest}/>
        <SearchResult searchRequest={this.state.searchRequest}
          searchResult={this.state.searchResult}
          />
      </div>
    )
  }
}

export default Search;
