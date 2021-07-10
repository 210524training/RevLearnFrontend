import { Picker } from '@react-native-picker/picker';
import React from 'react';

type Props = {
  OptionsList: string[],
  setSelected: (itemValue: string) => void,
}

const DynamicDropdown: React.FC<Props> = ({ OptionsList, setSelected }) => (<>
  {OptionsList[0]
    ? (
      <Picker
        onValueChange={(itemValue, itemIndex) => { setSelected(itemValue as string); }}>
        <Picker.Item label={'Please Select an Item'} value={'Homework'}/>
        {OptionsList.map((element) => <Picker.Item key={OptionsList.findIndex((test) => element === test)} label={element} value={element}/>)}
      </Picker>
    )
    : (
      <Picker
        selectedValue={'empty array'}>
        <Picker.Item label={'No Options Found :('} value={'empty array'}/>
      </Picker>
    )
  }
</>);

export default DynamicDropdown;
