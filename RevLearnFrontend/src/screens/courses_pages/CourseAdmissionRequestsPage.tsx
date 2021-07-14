import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import WithCourseNavbar from '../../components/higher_order_components/Navbars/WithCourseNavbar';
import { Course } from '../../models/Course';
import { User } from '../../models/User';
import { updateCourse, getCourseByID } from '../../remote/rev_learn_backend_api/RevLearnUsersAPI';

type Props = {
  courseID: string,
}

const CourseAdmissionRequestsPage: React.FC<Props> = (props) => {
  const [course, setCourse] = useState<Course>(getCourseByID(props.courseID));
  const [requests, setRequests] = useState<User[]>(course.admissionRequests || []);

  const acceptRequestHandlers = requests.map((request) => {
    const acceptRequest = () => {
      const newRequestList = requests.filter((item) => item.id !== request.id);
      const newStudentsList = [...course.students, request.id];

      const updatedCourse: Course = {
        ...course,
        admissionRequests: newRequestList,
        students: newStudentsList,
      };

      setCourse(updatedCourse);
      setRequests(newRequestList);
      updateCourse(updatedCourse);
    };
    return acceptRequest;
  });

  return (
    <>
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
