import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  Image, ImageSourcePropType, StyleSheet, Text, View,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { Course } from '../../models/Course';

type Props = {
  courses: Course[];
  setSelected: React.Dispatch<React.SetStateAction<Course[]>>;
}

const DisplayCourseList: React.FC<Props> = ({ courses, setSelected }) => (
  <>
    {courses.map((element, index) => (
      <ListItem key={index}>
        <Text>Course ID:  {`${element.id}`}</Text>
        <Text>Course Title: {`${element.courseTitle}`}</Text>
        <Text>Start Date: {`${element.startDate}`}</Text>
        <Text>End Date: {`${element.endDate}`}</Text>
        <Text>Teacher: {`${element.teacherID}`}</Text>
        <Text>Passing Grade: {`${element.passingGrade}`}</Text>
        <Text>Category: {`${element.category}`}</Text>
      </ListItem>
    ))}
  </>
);

export default DisplayCourseList;
