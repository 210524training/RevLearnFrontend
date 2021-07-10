import React from 'react';
import {
  Button,
  ScrollView, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WithHomeNavbar from '../../components/higher_order_components/Navbars/WithHomeNavbar';
import DisplayCourseList from '../../components/display_list/DisplayCourseList';
import { courses } from '../../remote/RevLearnBackendAPI';

type Props = {
}

const AllCoursesPage: React.FC<Props> = (props) => {
  const navigation = useNavigation();
  const setSelected = () => { navigation.canGoBack(); };

  const temp = () => {
    navigation.navigate('CreateCoursePage');
  };

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

        <Button title={'title'} onPress={temp}/>

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
