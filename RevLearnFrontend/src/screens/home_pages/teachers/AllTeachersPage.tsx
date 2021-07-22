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
      <View style={Buttons.container}>
        <Button title="Create Teacher" onPress={() => navigation.navigate('CreateTeacherPage')} />
      </View>

      {
        teachers && (
          <DisplayAllTeachersList teachers={teachers} />
        )
      }

    </View>
  );
};

export default WithHomeNavbar(AllTeachersPage);
