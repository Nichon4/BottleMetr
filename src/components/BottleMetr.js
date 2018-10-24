import React from 'react';
import Draggable from 'react-draggable';
import bottles from "../data/bottles.json";
import MeasureLine from "../img/MeasureLine.js";


class BottleMetr extends React.Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    bottleValue: 0,
  }
  //console.log(bottles);
  curBottle = ( this.props.match.params.bottle == null ) ? "kilbeggan" : this.props.match.params.bottle ;
  //  let BottleImg = bottles.bottle.img;
  bottle = bottles[this.curBottle];
  bottleImg = this.bottle.img;
  handleDrag = (e, ui) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
    let measureBase = ( this.state.deltaPosition.y !== 0 ) ? this.bottle.measures.reduce(( acc, {h,v}, idx, list) => -this.state.deltaPosition.y > h ? [{h,v}, list[idx+1]]: acc, []) : [this.bottle.measures[0], this.bottle.measures[1]];
    console.log(measureBase);
    let k = (measureBase[1].v - measureBase[0].v)/(measureBase[1].h - measureBase[0].h);
    this.setState({ bottleValue: Math.round(-k*this.state.deltaPosition.y - k*measureBase[0].h + measureBase[0].v) });
  }
  render() {
    let dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    return(
      <div className="BottleMetr">
        <img className="BottleImg" src={this.bottleImg}/>
        <div className="container">
          <Draggable
            axis="y"
            defaultPosition={{x: 0, y: this.bottle.bounds.bottom}}
            bounds={this.bottle.bounds}
            onDrag={this.handleDrag}
            {...this.state}
            >
            <div className="rangeSlider" id="rangeSlider" {...this.props}>
              <span className="measureValue1">{this.state.bottleValue}ml</span>
              <span className="measureValue2">{this.state.deltaPosition.y}</span>
              <MeasureLine />
            </div>
          </Draggable>
        </div>
      </div>
    );
  }
};

export default BottleMetr;
