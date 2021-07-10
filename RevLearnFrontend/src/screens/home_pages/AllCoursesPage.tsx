import React from "react";
import {Text, ScrollView, Pressable, Platform, TouchableNativeFeedback, View} from 'react-native';
import WithHomeNavbar from "../../components/higher_order_components/Navbars/WithHomeNavbar";
import CoursesList from '../../components/display_list/DisplayCourseList'
import { useNavigation } from '@react-navigation/native';
import DisplayCourseList from "../../components/display_list/DisplayCourseList";
import { courses } from '../../remote/RevLearnBackendAPI';

type Props = {
}

const AllCoursesPage: React.FC<Props> = (props) => {
  const nav = useNavigation();
  const setSelected = () => {}
  const handlePress = () => {
    // nav.navigate({
    //   course,
    // });
  }

  return (
    <ScrollView>
      <View>
        {/* {
          Platform.OS === 'android' ? 
          androidJSX() : coursesJSX()
        } */}
        {courses
          ? <DisplayCourseList courses={courses} setSelected={setSelected}/>
          : <></>
        }

      </View>
    </ScrollView>
  );
};

// Navigate to Create Course
/**
 * const navigation = useNavigation();
 * navigation.navigate('CreateCourse');
 */

export default WithHomeNavbar(AllCoursesPage);
