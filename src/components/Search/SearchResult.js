import React from 'react';

class SearchResult extends React.Component {

  render() {
    return(
      <div className="SearchResult">
        <ul>
          { (this.props.searchResult.length > 0) ? this.props.searchResult : "none"}
        </ul>
      </div>
    )
  }
}

export default SearchResult;
