import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import DisplayAllTeachersList from '../../../components/display_list/DisplayAllTeachersList';
import WithHomeNavbar from '../../../components/higher_order_components/Navbars/WithHomeNavbar';
import { User } from '../../../models/User';
import { getAllTeachers } from '../../../remote/rev_learn_backend_api/RevLearnUsersAPI';

type Props = {

}

const AllTeachersPage: React.FC<Props> = (props) => {
  const [selected, setSelected] = useState<string>();
  const [teachers, setTeachers] = useState<User[]>();

  useEffect(() => {
    (async () => {
      const result = await getAllTeachers();
      // add error handling
      setTeachers(result);
    })();
  }, []);
  return (
    <>
      {teachers
        ? <DisplayAllTeachersList teachers={teachers} setSelected={setSelected}/>
        : <></>
      }
    </>
  );
};

// Navigate to Create Teacher
/**
 * const navigation = useNavigation();
 * navigation.navigate('CreateTeacher');
 */

export default WithHomeNavbar(AllTeachersPage);
