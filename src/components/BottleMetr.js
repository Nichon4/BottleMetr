import React from 'react';
import Draggable from 'react-draggable';
import bottles from "../data/bottles.json";
import { head, last } from 'ramda';
import {
  DragIdentLine,
  DragMeter,
  DragImg
} from "../layout/Dragable";

class BottleMetr extends React.Component {
  
  constructor(props){
    super(props);
    this.mesureReduceF = this.mesureReduceF.bind(this);
    this.calculateBottleBase = this.calculateBottleBase.bind(this);

  }
  Y_INVERTATION = -1;
  
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    bottleValue: 0,
    
  };

  curBottle = ( this.props.match.params.bottle == null ) ? "kilbeggan_07l" : this.props.match.params.bottle ;
  bottle = bottles.find( obj => obj.link === this.curBottle );
  bottleImg = this.bottle.img;
  
  handleDrag = (e, ui) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
    this.takeMeasure();
  };
  
  layoutGraphK( liquorLevel ) {
    return (
      this.Y_INVERTATION * ( last(liquorLevel).v - head(liquorLevel).v) / (last(liquorLevel).h - head(liquorLevel).h )
    )
  }
  
  mesureReduceF() {
    return this.bottle
      .measures
      .reduce(
        (acc, {h,v}, idx, list) =>
          this.state.deltaPosition.y * this.Y_INVERTATION > h  ? [{h,v}, list[idx+1]] : acc ,[]
      )
  }
  
  calculateBottleBase() {
    return this.state.deltaPosition.y !== 0
      ? this.mesureReduceF()
      : [this.bottle.measures[0], this.bottle.measures[1]];
  }
  
  roundBottleLiqLevel(postion){
    const measureBase = this.calculateBottleBase();
    const k = this.layoutGraphK(measureBase);
    return Math.round(k*postion + k * head(measureBase).h + head(measureBase).v)
  }
  
  takeMeasure = () => {
    this.setState({ bottleValue:  this.roundBottleLiqLevel(this.state.deltaPosition.y )});
  };
  
  render() {
    return(
      <DragMeter>
        <DragImg src={this.bottleImg} alt="bottleImage" />
        <div className="container">
          <Draggable
            axis="y"
            defaultPosition={{x: 0, y: this.bottle.bounds.bottom}}
            bounds={this.bottle.bounds}
            onDrag={this.handleDrag}
            {...this.state}
          >
            <DragIdentLine
              value={this.state.bottleValue}
              position={this.state.deltaPosition.y} />
          </Draggable>
        </div>
      </DragMeter>
    );
  }
}

export default BottleMetr;
