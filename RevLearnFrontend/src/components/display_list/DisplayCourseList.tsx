import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button, ScrollView, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useAppSelector } from '../../hooks';
import { selectUser, UserState } from '../../hooks/slices/user.slice';
import { Course } from '../../models/Course';
import { updateCourse } from '../../remote/rev_learn_backend_api/RevLearnCoursesAPI';
import { AllCoursesStyle } from '../../styles/AllCoursesStyle';

type Props = {
  courses: Course[];
  setSelected: React.Dispatch<React.SetStateAction<Course[]>>;
}

const DisplayCourseList: React.FC<Props> = ({ courses, setSelected }) => {
  const user = useAppSelector<UserState>(selectUser);
  const handleButton = (course: Course) => {
    if(user) {
      course.admissionRequests.push(user.id);
      updateCourse(course);
    }
  };
  return (
    <>
      {courses.map((element, index) => (
        <ScrollView key={index} style={AllCoursesStyle.container} >
          <Text><Text style={AllCoursesStyle.header}>Course ID: </Text>{`${element.id}`}</Text>
          <Text><Text style={AllCoursesStyle.header}>Course Title: </Text>{`${element.courseTitle}`}</Text>
          <Text><Text style={AllCoursesStyle.header}>Start Date: </Text>{`${element.startDate}`}</Text>
          <Text><Text style={AllCoursesStyle.header}>End Date: </Text>{`${element.endDate}`}</Text>
          <Text><Text style={AllCoursesStyle.header}>Teacher: </Text>{`${element.teacherID}`}</Text>
          <Text><Text style={AllCoursesStyle.header}>Passing Grade: </Text>{`${element.passingGrade}`}</Text>
          <Text><Text style={AllCoursesStyle.header}>Category: </Text>{`${element.category}`}</Text>
          {(user && user.role === 'Student') ? <Button onPress={() => handleButton(element)} title='Add Course'/> : <></>}
        </ScrollView>
      ))}
    </>
  );
};

export default DisplayCourseList;
