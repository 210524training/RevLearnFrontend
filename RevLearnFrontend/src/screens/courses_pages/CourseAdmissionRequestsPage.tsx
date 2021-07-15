import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import WithCourseNavbar from '../../components/higher_order_components/Navbars/WithCourseNavbar';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CourseState, getCourse, setCourse } from '../../hooks/slices/course.slice';
import { Course } from '../../models/Course';
import { User } from '../../models/User';
import { getUserByID, updateCourse } from '../../remote/rev_learn_backend_api/RevLearnUsersAPI';

type Props = {

}

const setRequestList = async (idList: string[], set: React.Dispatch<React.SetStateAction<User[]>>): Promise<void> => {
  const users: User[] = [];
  idList.forEach(async (id) => {
    console.log('User ID: ', id);
    users.push(await getUserByID(id));
  });
  console.log('Users: ', users);
  set(users);
};

const CourseAdmissionRequestsPage: React.FC<Props> = () => {
  const course = useAppSelector<CourseState>(getCourse);
  const dispatch = useAppDispatch();
  const [requests, setRequests] = useState<User[]>([]);

  useEffect(() => {
    if(course) {
      setRequestList(course.admissionRequests, setRequests);
      console.log('Requests ', requests);
    }
  }, [course]);

  const acceptRequestHandlers = requests.map((request) => {
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
        setRequestList(newRequestList, setRequests);
        updateCourse(updatedCourse);
      }
    };
    return acceptRequest;
  });

  return (
    <>
      {
        course && (
          <Text>Enrollment Requests for {course.courseTitle}</Text>
        )
      }
      {
        requests.map((request, index) => (
          <ListItem key={index}>
            <Pressable onPress={acceptRequestHandlers[index]}>
              <View>
                <Text>User: {request.username}</Text>
              </View>
            </Pressable>
          </ListItem>
        ))
      }
    </>
  );
};

export default WithCourseNavbar(CourseAdmissionRequestsPage);
