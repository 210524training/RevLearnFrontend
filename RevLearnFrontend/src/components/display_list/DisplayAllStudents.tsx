import React, { Dispatch, SetStateAction } from 'react';
import { Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { User } from '../../models/User';

type Props = {
students: User[],
setSelected: Dispatch<SetStateAction<string | undefined>>;
}

const DisplayAllStudents: React.FC<Props> = ({ students, setSelected }) => (
  <>
    {students.map((element, index) => (
      <ListItem key={index}>
        <View>
          <Text>Student Username: {`${element.username}`}</Text>
        </View>
      </ListItem>

    ))}
  </>
);

export default DisplayAllStudents;
