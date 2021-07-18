import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  Button,
  Image, ImageSourcePropType, StyleSheet, Text, View,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { useAppSelector } from '../../hooks';
import { selectUser, UserState } from '../../hooks/slices/user.slice';
import { Course } from '../../models/Course';
import { updateCourse } from '../../remote/rev_learn_backend_api/RevLearnCoursesAPI';

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
        <ListItem key={index} >
          <Text>Course ID: {`${element.id}`}</Text>
          <Text>Course Title: {`${element.courseTitle}`}</Text>
          <Text>Start Date: {`${element.startDate}`}</Text>
          <Text>End Date: {`${element.endDate}`}</Text>
          <Text>Teacher: {`${element.teacherID}`}</Text>
          <Text>Passing Grade: {`${element.passingGrade}`}</Text>
          <Text>Category: {`${element.category}`}</Text>
          <Button onPress={() => handleButton(element)} title='Add Course'/>
        </ListItem>
      ))}
    </>
  );
};

export default DisplayCourseList;
