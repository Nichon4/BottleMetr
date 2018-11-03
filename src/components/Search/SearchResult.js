import React from 'react';
import ListItem from "./ListItem.js";


class SearchResult extends React.Component {

  state = {
    searchResult: this.props.searchResult.map( (obj, idx) => {
      return(
        <ListItem key={idx + "_" + obj.link} name={obj.name} link={`BottleMetr/${obj.link}`} img={obj.miniImg} />
      );
    })
  }


  render() {
    console.log(this.props.searchResult);
    return(
      <div>
        <ul className="SearchResult">
          { this.props.searchResult.map( (obj, idx) => {
            return(
              <ListItem key={idx + "_" + obj.link} name={obj.name} link={`BottleMetr/${obj.link}`} img={obj.miniImg} />
            );
          }) }
        </ul>
      </div>
    )
  }
}

export default SearchResult;
