import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Button, View } from 'react-native';
import DisplayAllTeachersList from '../../../components/display_list/DisplayAllTeachersList';
import WithHomeNavbar from '../../../components/higher_order_components/Navbars/WithHomeNavbar';
import { User } from '../../../models/User';
import { getAllTeachers } from '../../../remote/rev_learn_backend_api/RevLearnUsersAPI';
import { Buttons } from '../../../styles/Buttons';
import { Container } from '../../../styles/Container';

type Props = {

}

const AllTeachersPage: React.FC<Props> = () => {
  const [selected, setSelected] = useState<string>();
  const [teachers, setTeachers] = useState<User[]>();

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const result = await getAllTeachers();
      // add error handling
      setTeachers(result);
    })();
  }, []);

  return (
    <View style={Container.container}>
      {teachers ? (
        <DisplayAllTeachersList teachers={teachers} setSelected={setSelected}/>
      ) : <></>
      }
      <View style={Buttons.container}>
        <Button title="Create New Teacher" onPress={() => navigation.navigate('CreateTeacherPage')} />
      </View>
    </View>
  );
};

// Navigate to Create Teacher
/**
 * const navigation = useNavigation();
 * navigation.navigate('CreateTeacher');
 */

export default WithHomeNavbar(AllTeachersPage);
