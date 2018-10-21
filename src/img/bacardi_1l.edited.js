import React from "react";
import "../components/pathToPolygon.js";

const bottle = {

}

class BottleVector extends React.Component {
  state ={
    path: '<path d="M120.3 425.8c10.4 0 12.9-24 12.9-35.6v-287c0-18.5-10.5-34.6-21.6-44.9C95.6 43.4 90.5 38.2 89.9 0H43.3c-.6 38.2-5.7 43.4-21.7 58.3C10.5 68.6 0 84.8 0 103.2v286.9c0 11.7 2.5 35.6 12.9 35.6 0 .1 107.4.1 107.4.1z" fill="#848683" />',
    polygon: window.pathToPolygon(this.state.path, 100),
  }

//  this.setState({ polygon: window.pathToPolygon(this.state.path, 100) })

  render() {
    return(
    <svg viewBox="0 0 133.2 425.8" >
      {this.state.polygon}
    </svg>
  )}
};

export default BottleVector;
