import React from 'react';
import { Button, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useAppSelector } from '../../hooks';
import { CourseState, getCourse } from '../../hooks/slices/course.slice';
import { selectUser, UserState } from '../../hooks/slices/user.slice';
import { User } from '../../models/User';
import { updateCourse } from '../../remote/rev_learn_backend_api/RevLearnCoursesAPI';

type Props = {
students: User[],
}

const DisplayAllStudents: React.FC<Props> = ({ students }) => {
  const course = useAppSelector<CourseState>(getCourse);
  const user = useAppSelector<UserState>(selectUser);
  const spread = course?.students;
  const handleButton = (element: User) => {
    if(user && course) {
      console.log(` userID to be removed ${element.id} current course students ${spread}`);

      const index = course.students.indexOf(element.id);
      if(index > -1) {
        course.students.splice(index, 1);
        updateCourse(course);
      }
    }
  };

  return (
    <>
      {students.map((element, index) => (
        <ListItem key={index}>
          <Text>Student: {`${element.username}`}</Text>
          {(user?.role === 'Teacher') && <Button onPress={() => handleButton(element)} title='Drop Student'/> }
        </ListItem>

      ))}
    </>
  );
};

export default DisplayAllStudents;
