import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import DisplayAdmissionRequestsList from '../../components/display_list/DisplayAdmissionRequestsList';
import WithCourseNavbar from '../../components/higher_order_components/Navbars/WithCourseNavbar';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CourseState, getCourse, setCourse } from '../../hooks/slices/course.slice';
import { Course } from '../../models/Course';
import { User } from '../../models/User';
import { updateCourse } from '../../remote/rev_learn_backend_api/RevLearnCoursesAPI';
import { getCourseByID } from '../../remote/rev_learn_backend_api/RevLearnUsersAPI'

type Props = {

}

const setRequestList = async (idList: string[], set: React.Dispatch<React.SetStateAction<User[]>>): Promise<void> => {
  const users: User[] = [];
  idList.forEach(async (id) => {
    getUserByID(id).then((user) => { users.push(user[0]); console.log('adding user ', user[0]); set(users); });
  });
};

const CourseAdmissionRequestsPage: React.FC<Props> = () => {
  const course = useAppSelector<CourseState>(getCourse);
  const dispatch = useAppDispatch();
  const [requests, setRequests] = useState<User[]>([]);

  useEffect(() => {
    // async function setRequestList() {
    //   if(course) {
    //     const requestList: User[] = [];
    //     course.admissionRequests?.forEach(async (id) => {
    //       const user = await getUserByID(id);
    //       console.log('user: ', user);
    //       requestList.push(user);
    //     });
    //     console.log('requestList: ', requestList);
    //     setRequests(requestList);
    //     // setRequests([newStudent]);
    //     console.log('requests: ', requests);
    //   }

    if(course) {
      setRequestList(course.admissionRequests, setRequests);
    }
  }, []);

  const acceptRequestHandlers = requests ? requests.map((request) => {
    const acceptRequest = () => {
      if(course) {
        const newRequestList = course.admissionRequests.filter((item) => item !== request.id);
        const newStudentsList = [...course.students, request.id];

        const updatedCourse: Course = {
          ...course,
          admissionRequests: newRequestList,
          students: newStudentsList,
        };

        dispatch(setCourse(updatedCourse));
        // setRequests(newRequestList, setRequests);
        updateCourse(updatedCourse);
      }
    };
    return acceptRequest;
  }) : [];

  return (
    <>
      {
        course && (
          <Text>Enrollment Requests for {course.courseTitle}</Text>
        )
      }
      {
        requests ? (
          <DisplayAdmissionRequestsList requests={requests} />
        ) : (
          <Text>No Requests Found</Text>
        )
      }
    </>
  );
};

export default WithCourseNavbar(CourseAdmissionRequestsPage);
