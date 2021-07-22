import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { useAppSelector } from '../../../hooks';
import { CourseState, getCourse } from '../../../hooks/slices/course.slice';
import { UserState, selectUser } from '../../../hooks/slices/user.slice';
import { Assignment } from '../../../models/Assignment';
import { AssignmentPageStyle } from '../../../styles/AssignmentPageStyle';

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
    <View style={AssignmentPageStyle.container}>
      <Text style={AssignmentPageStyle.header}>Assignments Page</Text>

      {
        user?.role === 'Teacher' && (
          <View>
            <Button title={'Create Assignment'} onPress={createNavHandler}>Create Assignment</Button>
          </View>
        )
      }

      {
        course?.activities.map((activity, index) => (
          <>
            {
              isAssignment(activity) && (
                <ListItem key={index} style={AssignmentPageStyle.listItemContainer} onPress={() => { NavToAssignmentSubmissions(activity); }}>
                  <Text>{activity.title} </Text>
                </ListItem>
              )
            }
          </>
        ))
      }
    </View>
  );
};

export default WithCourseNavbar(AssignmentsPage);
