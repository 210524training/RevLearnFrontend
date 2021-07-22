import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import WithHomeNavbar from '../../components/higher_order_components/Navbars/WithHomeNavbar';
import DisplayCourseList from '../../components/display_list/DisplayCourseList';
import { getAllCourses } from '../../remote/rev_learn_backend_api/RevLearnCoursesAPI';
import { Course } from '../../models/Course';
import { useAppSelector } from '../../hooks';
import { UserState, selectUser } from '../../hooks/slices/user.slice';

type Props = {
}

const awaitRequest = async (set: React.Dispatch<React.SetStateAction<Course[]>>): Promise<void> => set(await getAllCourses());

const AllCoursesPage: React.FC<Props> = () => {
  const user = useAppSelector<UserState>(selectUser);

  const [courses, setCourses] = useState<Course[]>([]);
  useEffect(() => {
    awaitRequest(setCourses);
  }, []);
  const navigation = useNavigation();
  const setSelected = () => { navigation.canGoBack(); };

  const navToCreateCourse = () => {
    navigation.navigate('CreateCoursePage');
  };

  return (
    <ScrollView>

      <View>
        {
          user?.role === 'Admin' && (
            <View style={{ backgroundColor: '#00B2D4' }}>
              <Button mode="contained" color="#19D9FF" onPress={navToCreateCourse}>Create Course</Button>
            </View>
          )
        }

        {courses
          ? <DisplayCourseList courses={courses} setSelected={setSelected}/>
          : <></>
        }

      </View>
    </ScrollView>
  );
};

export default WithHomeNavbar(AllCoursesPage);
