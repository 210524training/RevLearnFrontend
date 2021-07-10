import React from 'react';
import { Text } from 'react-native';
import { ListItem } from 'react-native-elements';

type Props = {
  items: { label: string, value: string, onPress?: () => void }[]
}

const DisplayCourseList: React.FC<Props> = (props) => (
  <>
    {
      props.items.map((item, index) => (
        <ListItem key={index}>
          <Text>{item.label}:</Text>
          <Text>{item.value}</Text>
        </ListItem>
      ))
    }
  </>
);

export default DisplayCourseList;
