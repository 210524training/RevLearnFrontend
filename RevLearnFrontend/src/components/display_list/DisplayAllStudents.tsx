import React, { Dispatch, SetStateAction } from 'react';
import { Text, View } from 'react-native';
import { User } from '../../models/User';

type Props = {
students: User[],
setSelected: Dispatch<SetStateAction<string | undefined>>;
}

const DisplayAllStudents: React.FC<Props> = ({ students, setSelected }) => (
  <>
    {students.map((element) => (
      <View>
        <View>
          <Text>Student Username: {`${element.username}`}</Text>
        </View>
      </View>

    ))}
  </>
);

export default DisplayAllStudents;
