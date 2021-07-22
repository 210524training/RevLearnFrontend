import React, { useEffect, useState } from 'react';
import {
  Button,
  ScrollView, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WithHomeNavbar from '../../components/higher_order_components/Navbars/WithHomeNavbar';
import DisplayCourseList from '../../components/display_list/DisplayCourseList';
import { getAllCourses } from '../../remote/rev_learn_backend_api/RevLearnCoursesAPI';
import { Course } from '../../models/Course';

type Props = {
}

const awaitRequest = async (set: React.Dispatch<React.SetStateAction<Course[]>>): Promise<void> => set(await getAllCourses());

const AllCoursesPage: React.FC<Props> = (props) => {
  const [courses, setCourses] = useState<Course[]>([]);
  useEffect(() => {
    awaitRequest(setCourses);
  }, []);
  const navigation = useNavigation();
  const setSelected = () => { navigation.canGoBack(); };

  const temp = () => {
    navigation.navigate('CreateCoursePage');
  };

  return (
    <ScrollView>

      <View>
        <View style={{ backgroundColor: '#00B2D4' }}>
          <Button title={'Add Course'} onPress={temp}/>
        </View>

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
