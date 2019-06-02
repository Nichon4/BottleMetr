import React from 'react';
import SearchInput from "./SearchInput.js";
import SearchResult from "./SearchResult.js";
import bottles from "../../data/bottles.json";
import "../../css/Search.css";
import {connect} from "react-redux";
import {append, compose, filter, flip, transduce} from "ramda";

const mapStateToProps = state => ({
  searchFilterShow: state.searchFilterSwitch.searchFilterShow,
  filterTypes: state.searchFilterSwitch.filterTypes
});

class Search extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      searchRequest: "",
      searchResult: [],
      searchResultLimit: 10,
      bottleList: []
    };

    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }


  handleSearchInputChange(event) {
    this.setState({
      searchRequest: event.target.value,
      searchResult: this.searchFilter(event.target.value)
    });
  }

  searchFilter(searchRequest) {

    const userFilters = Object.keys(this.props.filterTypes).map(
      fName => ({fName: fName, v: this.props.filterTypes[fName] })
    )
      .concat([{ fName: "name", v: searchRequest}]);

    const allFilters = {
      name: name => x => x.name.toLowerCase().includes(name.toLowerCase()) ,
      type: type => x => x.type.includes(type),
      vol: vol => x => x.vol.toString() === vol,
      brand: brand => x => x.brand.includes(brand)
    };

    const filterGenerator = (userF) => compose(
      ...userF.map(
        ({ fName, v }) => filter(allFilters[fName](v))
      ));

    const result = transduce(filterGenerator(userFilters), flip(append), [], bottles)
      .sort((a,b) => a.name > b.name);

    console.log(result);

    return ( result )
  }

  componentDidMount(){
    this.setState({searchResult: this.searchFilter(this.state.searchRequest)})
  }

  componentDidUpdate(prevProps) {
    if ( this.props.filterTypes !== prevProps.filterTypes ) {
      this.setState({searchResult: this.searchFilter(this.state.searchRequest)})
    }
  }

  render() {
    return (
      <div>
        <SearchInput
          onChange={this.handleSearchInputChange}
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

export default connect(mapStateToProps, null)(Search);
