import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ActivityType } from '../../Types/MyTypes';

type Props = {
  ActivityType: ActivityType,
  SetTitle: (title: string) => void,
}
const ActivityForm: React.FC<Props> = (props) => {
  const temp = () => 1;
  return (
    <View>
      <Text>{props.ActivityType} Title:</Text>
      <TextInput
        onChange={(event) => { props.SetTitle(event.target.toString()); }}
        placeholder={'Creative Writing Paper'}/>
      <Text>{props.ActivityType} Discription:</Text>
      <TextInput
        multiline={true}
        onChange={(event) => { props.SetTitle(event.target.toString()); }}
        placeholder={`Enter a discription of the ${props.ActivityType}`}/>
    </View>
  );
};

export default ActivityForm;
