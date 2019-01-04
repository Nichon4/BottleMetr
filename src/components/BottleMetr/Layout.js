import styled from 'styled-components';
import React from 'react';
import MeasureLine from "../../img/MeasureLine";

const DragSpan = styled.span`
  color: #ff9500;
  position: absolute;
  bottom: 10px;
  ${props => props.isRight ? 'right: 36px;' : 'left: 36px;'}
`;

const DragSlider = styled.div`
  position: relative;
  bottom: 0px;
`;

export const DragMeter = styled.div`
  background-color: #000000;
  position: relative;
  width: 375px;
  height: 450px;
  color: white;
`;

export const DragImg = styled.img`
  display: block;
  position: relative;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
`;

export const DragIdentLine = ({value, position, ...props}) =>  (
    <DragSlider {...props}>
      <DragSpan >         {value}ml  </DragSpan>
      <DragSpan isRight > {position} </DragSpan>
      <MeasureLine />
    </DragSlider>
  );

export const SaveButton = styled.button`{
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: black;
  color: darkorange;
  font-size: 20px;
}`