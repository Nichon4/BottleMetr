import React from 'react';
import Draggable from 'react-draggable';
import bottles from "../../data/bottles.json";
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

    this.measures = this.bottle.measures.reduce((acc, {h, v}) => (
      {
        h: acc.h.add(h),
        v: acc.v.add(v)
      }
    ), {h: new Set(), v: new Set()});

    this.h = Array.from(this.measures.h);
    this.v = Array.from(this.measures.v);

    this.state = {
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      bottleValue: 0,
    };

    this.spline = require('cubic-spline');
    this.mesureReduceF = this.mesureReduceF.bind(this);
    this.calculateBottleBase = this.calculateBottleBase.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.saveMeasure = this.saveMeasure.bind(this);
    this.splineLevel = this.splineLevel.bind(this);
  }
  
  handleDrag(e, {deltaX, deltaY}) {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: { x: x + deltaX, y: y + deltaY },
      bottleValue:  this.splineLevel(y + deltaY )
    });
  }

  splineLevel(position) {
    return Math.round(this.spline(-position, this.h, this.v));
  }

  saveMeasure() {
    let obj = "favorites";
    let key = this.curBottle;
    let param = "value";
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
