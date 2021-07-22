/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React from 'react';
import { Text, View } from 'react-native';
import { ListItem } from 'react-native-elements/dist/list/ListItem';
import { Course } from '../models/Course';
import { CourseGrade } from '../models/CourseGrade';

type Props1 = {
  List: CourseGrade[],
  Courses: Course[],
  set: any,
}

const MapGrades: React.FC<Props1> = ({ List, Courses, set }) => (<>
  {/* {
    List.map((element: CourseGrade, index: number) => (
      <View key={index}>
        <ListItem>{Courses.find((course) => course.id === element.courseId)?.courseTitle }</ListItem>
        <ListItem >{element.grade}</ListItem>
      </View>
    ))} */}
</>);

export default MapGrades;
