/* eslint-disable no-unused-expressions */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import DisplayAllStudents from '../../components/display_list/DisplayAllStudents';
import WithCourseNavbar from '../../components/higher_order_components/Navbars/WithCourseNavbar';
import { useAppSelector } from '../../hooks';
import { CourseState, getCourse } from '../../hooks/slices/course.slice';
import { User } from '../../models/User';
import { getUserByID } from '../../remote/rev_learn_backend_api/RevLearnUsersAPI';

type Props = {

}

const CourseStudentsPage: React.FC<Props> = () => {
  const course = useAppSelector<CourseState>(getCourse);
  const [students, setStudents] = useState<User[]>();

  async function getListOfStudents() {
    const studentArray: User[] = [];
    if(course) {
      for(let i = 0; i < course.students.length; i++) {
        const result = await getUserByID(course.students[i]);
        result && studentArray.push(result);
      }
      return studentArray.flat(course.students.length);
    }
  }

  // async function getListOfStudents() {
  //   const studentArray: User[] = [];
  //   course?.students.forEach(async (element) => {
  //     const result = await getUserByID(element);
  //     // eslint-disable-next-line no-unused-expressions
  //     result && studentArray.push(result);
  //   });
  //   return studentArray;
  // }

  useEffect(() => {
    (async () => {
      if(course) {
        const result = await getListOfStudents();
        setStudents(result);
        console.log(` course students ${course?.students} array `, students);
      }
    })();
  }, []);

  return (
    <ScrollView>
      <View>
        {students
          ? <DisplayAllStudents students={students} />
          : <></>
        }

      </View>
    </ScrollView>
  );
};

export default WithCourseNavbar(CourseStudentsPage);
