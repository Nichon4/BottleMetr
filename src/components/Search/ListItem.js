import React from 'react';
import {Link} from 'react-router-dom';

class ListItem extends React.Component {
  render() {
    return(
      <Link to={this.props.link}>
        <li key={this.props.link}>
          <img src={this.props.img} />
          <text>{this.props.name}</text>
        </li>
      </Link>
    )
  }
}

export default ListItem;
