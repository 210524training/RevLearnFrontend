import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  Image, ImageSourcePropType, StyleSheet, Text, View,
} from 'react-native';
import { Course } from '../../models/Course';

type Props = {
  courses: Course[];
  setSelected: Dispatch<SetStateAction<string | undefined>>;
}

const DisplayCourseList: React.FC<Props> = ({ courses, setSelected }) => (
  <>
    {courses.map((element) => (
      <>

        <Text>Course ID:  {`${element.courseID}`}</Text>

        <Text>Course Title: {`${element.courseTitle}`}</Text>

        <Text>Start Date: {`${element.startDate}`}</Text>

        <Text>End Date: {`${element.endDate}`}</Text>

        <Text>Teacher: {`${element.teacher}`}</Text>

        <Text>Passing Grade: {`${element.passingGrade}`}</Text>

        <Text>Category: {`${element.category}`}</Text>

      </>
    ))}
  </>
);

export default DisplayCourseList;
