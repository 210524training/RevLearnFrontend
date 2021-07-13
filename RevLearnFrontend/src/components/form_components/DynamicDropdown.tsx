import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { Text } from 'react-native';

type Props = {
  OptionsList: string[],
  setSelected: (itemValue: string) => void,
  Selected: string,
  title?: string,
}

const DynamicDropdown: React.FC<Props> = (props) => (<>
  {props.OptionsList[0]
    ? (<>
      <Text>
        {props.title ? props.title : 'Select Item'}
      </Text>
      <Picker
        selectedValue={props.Selected}
        onValueChange={(itemValue, itemIndex) => { props.setSelected(itemValue as string); }}>
        {/* <Picker.Item label={'Please Select an Item'} value={'Homework'}/> */}
        {props.OptionsList.map((element, index) => <Picker.Item key={index} label={element} value={element}/>)}
      </Picker>
    </>)
    : (
      <Picker
        selectedValue={'empty array'}>
        <Picker.Item label={'No Options Found :('} value={'empty array'}/>
      </Picker>
    )
  }
</>);

export default DynamicDropdown;
