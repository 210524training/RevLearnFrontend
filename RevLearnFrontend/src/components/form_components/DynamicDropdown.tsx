import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { Text } from 'react-native';
import { Buttons } from '../../styles/Buttons';
import { LandingPageStyles } from '../../styles/LandingPageStyles';

type Props = {
  OptionsList: string[],
  setSelected: (itemValue: string) => void,
  Selected: string,
  title?: string,
}

const DynamicDropdown: React.FC<Props> = (props) => (<>
  {props.OptionsList[0]
    ? (<>
      <Text style={LandingPageStyles.header}>
        {props.title ? props.title : 'Select Item'}
      </Text>
      <Picker
        style={Buttons.container}
        selectedValue={props.Selected}
        onValueChange={(itemValue) => { props.setSelected(itemValue as string); }}>
        {/* <Picker.Item label={'Please Select an Item'} value={'Homework'}/> */}
        {props.OptionsList.map((element, index) => <Picker.Item key={index} label={element} value={element}/>)}
      </Picker>
    </>)
    : (
      <Picker
        style={Buttons.container}
        selectedValue={'empty array'}>
        <Picker.Item label={'No Options Found :('} value={'empty array'}/>
      </Picker>
    )
  }
</>);

export default DynamicDropdown;
