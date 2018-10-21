import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import Bottle from "../img/bacardi_1l.js";

class About extends Component {

   render() {
    return (
        <div className="MainMenu">
          <text>About text</text>
          <Bottle />
        </div>
    )
  }
};
export default About;
