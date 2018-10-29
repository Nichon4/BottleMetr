import React from 'react';
import {Link} from 'react-router-dom';

class ListItem extends React.Component {
  render() {
    //<ListItem key={idx + "_" + obj.link} name={obj.name} link={obj.link} img={obj.miniImg} />
    return(
      <Link to={this.props.link}>
        <li key={this.props.key}>
          <img src={this.props.img} />
          <text>{this.props.name}</text>
        </li>
      </Link>
    )
  }
}

export default ListItem;
