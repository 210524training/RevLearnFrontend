import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Button, Pressable, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { useAppSelector } from '../../../hooks';
import { CourseState, getCourse } from '../../../hooks/slices/course.slice';
import { Assignment } from '../../../models/Assignment';

type Props = {

}

function isAssignment(object: any): object is Assignment {
  return 'type' in object;
}

const AssignmentsPage: React.FC<Props> = () => {
  const course = useAppSelector<CourseState>(getCourse);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    if(course) {
      const assignmentList: Assignment[] = [];
      course.activities.forEach((activity) => {
        if(isAssignment(activity)) {
          assignmentList.push(activity);
        }
      });
      setAssignments(assignmentList);
    }
  }, []);

  const createNavHandler = () => {
    navigation.navigate('CreateAssignmentPage');
  };

  const NavToAssignmentSubmissions = (assignment: Assignment) => {
    navigation.navigate('AssignmentsSubmissionsPage', { assignment });
  };

  return (
    <>
      <Text>Assignments Page</Text>
      <Button title={'Create Assignment'} onPress={createNavHandler}>Create Assignment</Button>
      {
        assignments.map((assignment, index) => (
          <ListItem key={index}>
            <Pressable onPress={() => { NavToAssignmentSubmissions(assignment); }}>
              <View>
                <Text>{assignment.title}</Text>
              </View>
            </Pressable>
          </ListItem>
        ))
      }
    </>
  );
};

// Navigate to SubmitAssignments, CreateAssignment, AssignmentsSubmissions, DetaliedSubmission
/**
 * const navigation = useNavigation();
 * navigation.navigate('SubmitAssignmentsPage');
 * navigation.navigate('CreateAssignmentPage');
 * navigation.navigate('AssignmentsSubmissionsPage');
 * navigation.navigate('DetaliedSubmissionPage');
 */

export default WithCourseNavbar(AssignmentsPage);
