import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Button, Pressable, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { useAppSelector } from '../../../hooks';
import { CourseState, getCourse } from '../../../hooks/slices/course.slice';
import { UserState, selectUser } from '../../../hooks/slices/user.slice';
import { Assignment } from '../../../models/Assignment';

type Props = {

}

function isAssignment(object: any): object is Assignment {
  return 'type' in object;
}

const AssignmentsPage: React.FC<Props> = () => {
  const course = useAppSelector<CourseState>(getCourse);
  const navigation = useNavigation();

  const user = useAppSelector<UserState>(selectUser);

  const createNavHandler = () => {
    navigation.navigate('CreateAssignmentPage');
  };

  const NavToAssignmentSubmissions = (assignment: Assignment) => {
    if(user) {
      if(user.role === 'Teacher') {
        navigation.navigate('AssignmentsSubmissionsPage', { assignment });
      } else {
        navigation.navigate('SubmitAssignmentsPage', { assignment });
      }
    }
  };

  return (
    <>
      <Text>Assignments Page</Text>
      <Button title={'Create Assignment'} onPress={createNavHandler}>Create Assignment</Button>
      {
        course?.activities.map((activity, index) => (
          <>
            {
              isAssignment(activity) && (
                <ListItem key={index}>
                  <Pressable onPress={() => { NavToAssignmentSubmissions(activity); }}>
                    <View>
                      <Text>{activity.title}</Text>
                    </View>
                  </Pressable>
                </ListItem>
              )
            }
          </>
        ))
      }
    </>
  );
};

export default WithCourseNavbar(AssignmentsPage);
