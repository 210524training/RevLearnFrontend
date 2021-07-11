import React, { Dispatch, SetStateAction } from 'react';
import { Text, View } from 'react-native';
import { User } from '../../models/User';

type Props = {
teachers: User[],
setSelected: Dispatch<SetStateAction<string | undefined>>;
}

const DisplayAllTeachersList: React.FC<Props> = ({ teachers, setSelected }) => (
  <>
    {teachers.map((element) => (
      <View>
        <View>
          <Text>Teacher Username: {`${element.username}`}</Text>
        </View>
      </View>

    ))}
  </>
);

export default DisplayAllTeachersList;
