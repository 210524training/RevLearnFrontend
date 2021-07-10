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
      <View>
        <View>
          <Text>Course ID:</Text> {`${element.courseID}`}
        </View>
        <View>
          <Text>Course Title:</Text> {`${element.courseTitle}`}
        </View>
        <View>
          <Text>Start Date:</Text> {`${element.startDate}`}
        </View>
        <View>
          <Text>End Date:</Text> {`${element.endDate}`}
        </View>
        <View>
          <Text>Teacher:</Text> {`${element.teacher}`}
        </View>
        <View>
          <Text>Passing Grade:</Text> {`${element.passingGrade}`}
        </View>
        <View>
          <Text>Category:</Text> {`${element.category}`}
        </View>
      </View>
    ))}
  </>
);

export default DisplayCourseList;
