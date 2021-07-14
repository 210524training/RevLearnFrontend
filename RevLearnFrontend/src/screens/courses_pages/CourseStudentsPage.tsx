import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import DisplayAllStudents from '../../components/display_list/DisplayAllStudents';
import WithCourseNavbar from '../../components/higher_order_components/Navbars/WithCourseNavbar';
import { User } from '../../models/User';
import { getAllStudentsForCourse } from '../../remote/rev_learn_backend_api/RevLearnUsersAPI';

type Props = {

}
const CourseStudentsPage: React.FC<Props> = (props) => {
  const [selected, setSelected] = useState<string>();
  const [students, setStudents] = useState<User[]>();

  useEffect(() => {
    (async () => {
      const result = await getAllStudentsForCourse();
      // add error handling
      setStudents(result);
    })();
  }, []);

  return (
    <ScrollView>
      <View>

        {students
          ? <DisplayAllStudents students={students} setSelected={setSelected}/>
          : <></>
        }

      </View>
    </ScrollView>
  );
};

export default WithCourseNavbar(CourseStudentsPage);
