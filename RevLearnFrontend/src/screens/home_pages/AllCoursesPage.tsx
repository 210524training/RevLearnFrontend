import React from "react";
import {Text, ScrollView, Pressable, Platform, TouchableNativeFeedback, View} from 'react-native';
import WithHomeNavbar from "../../components/higher_order_components/Navbars/WithHomeNavbar";
import CoursesList from '../../components/display_list/courses'
import { useNavigation } from '@react-navigation/native';
import Courses from "../../models/Course";

type Props = {
}

const AllCoursesPage: React.FC<Props> = (props) => {
  const nav = useNavigation();
  const courses = ['computer science', 'math', 'chemistry', 'english']
  
  const coursesJSX = () => {
    return courses.map(course => (
      <Pressable onPress={() => handlePress(courses)}>
        <CoursesList source={courses[0]} description={courses[1]} />
      </Pressable>
    ));
  }
  
  const androidJSX = () => {
    return courses.map(course => (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()}
        onPress={() => handlePress(course)}>
        <CoursesList source={courses[0]} description={courses[1]}/>
      </TouchableNativeFeedback>
    ))
  }

  const handlePress = (course) => {
    nav.navigate({
      course,
    });
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        {
          Platform.OS === 'android' ? 
          coursesJSX() : coursesJSX()
        }
      </View>
    </ScrollView>
  );
};

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 20,
    marginTop: 10,
    backgroundColor: "white",
  }
});



// Navigate to Create Course
/**
 * const navigation = useNavigation();
 * navigation.navigate('CreateCourse');
 */

export default WithHomeNavbar(AllCoursesPage);
