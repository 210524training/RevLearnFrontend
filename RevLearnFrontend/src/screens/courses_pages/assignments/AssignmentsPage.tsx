import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Platform, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import B from '../../../components/BoldText';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { useAppSelector } from '../../../hooks';
import { CourseState, getCourse } from '../../../hooks/slices/course.slice';
import { UserState, selectUser } from '../../../hooks/slices/user.slice';
import { Assignment } from '../../../models/Assignment';
import { AssignmentPageStyle } from '../../../styles/AssignmentPageStyle';
import { CreateAssignmentStyle } from '../../../styles/CreateAssignmentStyle';
import AssignmentSubmissionsPage from './AssignmentSubmissionsPage';

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
    <ScrollView style={AssignmentPageStyle.background2}>
      <View style={AssignmentPageStyle.container}>
        {Platform.OS === 'web' && <B input={'Assignments Page'}/>}
        {
          user?.role === 'Teacher' && (
            <View style={CreateAssignmentStyle.item1}>
              <Button mode="contained" color="#19D9FF" onPress={createNavHandler}>Create Assignment</Button>
            </View>
          )
        }

        {
          course?.activities.map((activity, index) => (
            <View style={AssignmentPageStyle.listItemContainer} key={index}>
              {
                isAssignment(activity) && (
                  <View key={index} style={AssignmentPageStyle.listItemContainer}>
                    <Text onPress={() => { NavToAssignmentSubmissions(activity); }}>{activity.title} </Text>
                  </View>
                )
              }
            </View>
          ))
        }
      </View>
    </ScrollView>
  );
};

export default WithCourseNavbar(AssignmentsPage);
