import { Picker } from '@react-native-picker/picker';
import React from 'react';

type Props = {
  OptionsList: string[],
  setSelected: (itemValue: string) => void,
}

const DynamicDropdown: React.FC<Props> = ({ OptionsList, setSelected }) => (<>
  {OptionsList
    ? (
      <Picker
        selectedValue={OptionsList[0]}
        onValueChange={(itemValue) => { setSelected(itemValue); }}>
        {OptionsList.map((element) => <Picker.Item label={element} value={element}/>)}
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
