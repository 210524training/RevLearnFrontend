/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import Slider from '@react-native-community/slider';
import { View, Text } from 'react-native';

type Props = {
  Step?: number,
  StartingValue?: number,
  MinValue?: number,
  MaxValue?: number,
  CurrentValue: number,
  SetValue: (value: number) => void,
  Title?: string,
}
const DynamicSlider: React.FC<Props> = (props) => {
  console.log('updated');
  return (<>
    <Slider
      step={props.Step ? props.Step : 1}
      minimumValue={props.MinValue ? props.MinValue : 0}
      maximumValue={props.MaxValue ? props.MaxValue : 1000}
      value={props.StartingValue ? props.StartingValue : 1}
      onValueChange={(value: number) => { props.SetValue(value); }}
    />
    <Text>{props.Title ? props.Title : 'Value: '} {props.CurrentValue}</Text>
  </>);
};

export default DynamicSlider;
