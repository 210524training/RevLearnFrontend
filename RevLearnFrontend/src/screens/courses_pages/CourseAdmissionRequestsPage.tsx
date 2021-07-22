/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import B from '../../components/BoldText';
import DisplayAdmissionRequestsList from '../../components/display_list/DisplayAdmissionRequestsList';
import WithCourseNavbar from '../../components/higher_order_components/Navbars/WithCourseNavbar';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CourseState, getCourse, setCourse } from '../../hooks/slices/course.slice';
import { Course } from '../../models/Course';
import { User } from '../../models/User';
import { updateCourse } from '../../remote/rev_learn_backend_api/RevLearnCoursesAPI';
import { getUserByID } from '../../remote/rev_learn_backend_api/RevLearnUsersAPI';

type Props = {

}

const getUsers = async (course: Course) => {
  const requestList: User[] = [];

  for(let i = 0; i < course.admissionRequests.length; i++) {
    const user = await getUserByID(course.admissionRequests[i]);
    console.log('adding user: ', user);
    requestList.push(user);
  }

  console.log('request list item:', requestList[0]);
  return requestList;
};

const CourseAdmissionRequestsPage: React.FC<Props> = () => {
  const course = useAppSelector<CourseState>(getCourse);
  const dispatch = useAppDispatch();
  const [requests, setRequests] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      if(course) {
        const result = await getUsers(course);
        setRequests(result);
      }
    })();
  }, []);

  const acceptRequestHandler = async (request: User) => {
    if(course) {
      const newRequestList = course.admissionRequests.filter((item) => item !== request.id);
      const newStudentsList = [...course.students, request.id];

      const updatedCourse: Course = {
        ...course,
        admissionRequests: newRequestList,
        students: newStudentsList,
      };

      dispatch(setCourse(updatedCourse));
      await updateCourse(updatedCourse);
      setRequests(await getUsers(updatedCourse));
    }
  };

  return (
    <View style={{ backgroundColor: '#00B2D4', padding: 20 }}>
      {
        course && (
          <Text> <B input={'Enrollment Requests For: '}/>{course.courseTitle}</Text>
        )
      }
      {
        requests[0] ? (
          <DisplayAdmissionRequestsList requests={requests} onPress={acceptRequestHandler} />
        ) : (
          <Text>No Requests Found</Text>
        )
      }
    </View>
  );
};

export default WithCourseNavbar(CourseAdmissionRequestsPage);
