import React, { Dispatch, SetStateAction } from 'react';
import { Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { User } from '../../models/User';

type Props = {
teachers: User[],
setSelected: Dispatch<SetStateAction<string | undefined>>;
}

const DisplayAllTeachersList: React.FC<Props> = ({ teachers, setSelected }) => (
  <>
    {teachers.map((element, index) => (
      <ListItem key={index}>
        <View>
          <Text>Teacher Username: {`${element.username}`}</Text>
        </View>
      </ListItem>
    ))}
  </>
);

export default DisplayAllTeachersList;
