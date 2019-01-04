import React from 'react';
import Draggable from 'react-draggable';
import bottles from "../../data/bottles.json";
import { head, last } from 'ramda';
import {
  DragIdentLine,
  DragMeter,
  DragImg,
  SaveButton
} from "./Layout";
import { saveData } from "../dataTransfer";
//TODO: add "save current volume"

class BottleMetr extends React.Component {
  
  constructor(props){
    super(props);
    
    this.curBottle = ( this.props.match.params.bottle == null ) ? "kilbeggan_07l" : this.props.match.params.bottle ;

    this.Y_INVERTATION = -1;
    
    // TODO: REMOVE AFTER BACKEND CONNECTION
    this.bottle = bottles.find( obj => obj.link === this.curBottle );
    
    this.state = {
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      bottleValue: 0,
    };
    
    this.mesureReduceF = this.mesureReduceF.bind(this);
    this.calculateBottleBase = this.calculateBottleBase.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.saveMeasure = this.saveMeasure.bind(this);
  }
  
  handleDrag(e, {deltaX, deltaY}) {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: { x: x + deltaX, y: y + deltaY },
      bottleValue:  this.roundBottleLiqLevel(this.state.deltaPosition.y )
    });
  };
  
  layoutGraphK(liquorLevel) {
    return (
      this.Y_INVERTATION * ( last(liquorLevel).v - head(liquorLevel).v) / (last(liquorLevel).h - head(liquorLevel).h )
    )
  }
  
  mesureReduceF(postion) {
    return this.bottle
      .measures
      .reduce( (acc, {h,v}, idx, list) =>
          postion * this.Y_INVERTATION > h  ? [{h,v}, list[idx+1]] : acc,
          []
      )
  }
  
  calculateBottleBase(postion) {
    return postion !== 0
      ? this.mesureReduceF(postion)
      : [head(this.bottle.measures), last(this.bottle.measures)];
  }
  //TODO: rework in cubic-spline
  roundBottleLiqLevel(postion){
    const measureBase = this.calculateBottleBase(postion);
    const k = this.layoutGraphK(measureBase);
    return Math.round(k*postion + k * head(measureBase).h + head(measureBase).v)
  }

  saveMeasure() {
    let obj = "favorites";
    let key = this.curBottle;
    let param = "value"
    let value = this.state.bottleValue;
    try {
      saveData(obj, key, param, value)
    }
    catch (e) {
      return e;
    }
    return true;
  }
  
  render() {
    return(
      <DragMeter>
        <DragImg src={this.bottle.img} alt="bottleImage" />
        <SaveButton
          onClick={this.saveMeasure}
          >
          Save
        </SaveButton>
        <div>
          <Draggable
            axis="y"
            defaultPosition={{x: 0, y: this.bottle.bounds.bottom}}
            bounds={this.bottle.bounds}
            onDrag={this.handleDrag}
            {...this.state}
          >
            <DragIdentLine
              value={this.state.bottleValue}
              position={this.state.deltaPosition.y}
            />
          </Draggable>
        </div>
      </DragMeter>
    );
  }
}

export default BottleMetr;
