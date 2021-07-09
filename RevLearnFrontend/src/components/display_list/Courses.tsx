import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import Course from '../../models/Course';

type Props = {
  courses: Course[]
}

const CoursesList: React.FC<Props> = (props) => {
  props.courses
  return (
    <>
      <View style={styles.courses}>
        <Text style={styles.label}>{props.courses[0].courseTitle} </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  courses: {
    backgroundColor: '#a1becc',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 3,
  },
  label: {
    fontWeight: "600",
    fontSize: 20,
    color: "#262633",
    fontFamily: ""
  }
});

export default CoursesList; 
