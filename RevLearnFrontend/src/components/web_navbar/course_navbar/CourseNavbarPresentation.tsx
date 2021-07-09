import React from 'react';
import { Text, View } from 'react-native';
import { NavBarStyles } from '../../../styles/NavBarStyles';

type Props = {
  NavToCourseHome: () => void,
  NavToCourseResources: () => void,
  NavToAssignments: () => void,
  NavToQuizzes: () => void,
  NavToCourseInfo: () => void,
  NavToCourseGrades: () => void,
  NavToAdmissionRequests: () => void,
  NavToStudents: () => void,
  NavToAllCourseGrades: () => void,
}
const CourseHomeNavbar: React.FC<Props> = ({
  NavToCourseHome, NavToCourseResources, NavToAssignments, NavToQuizzes, NavToCourseInfo, NavToCourseGrades, NavToAdmissionRequests, NavToStudents, NavToAllCourseGrades,
}) => (
  <View style={NavBarStyles.navContainer}>
    <Text style={NavBarStyles.navItem} onPress={NavToCourseHome}>CourseHome</Text>
    <Text style={NavBarStyles.navItem} onPress={NavToCourseResources}>CourseResources</Text>
    <Text style={NavBarStyles.navItem} onPress={NavToAssignments}>Assignments</Text>
    <Text style={NavBarStyles.navItem} onPress={NavToQuizzes}>Quizzes</Text>
    <Text style={NavBarStyles.navItem} onPress={NavToCourseInfo}>CourseInfo</Text>

    {/* Teacher */}
    {true
      ? (<>
        <Text style={NavBarStyles.navItem} onPress={NavToAllCourseGrades}>AllCourseGrades</Text>
        <Text style={NavBarStyles.navItem} onPress={NavToStudents}>Students</Text>
        <Text style={NavBarStyles.navItem} onPress={NavToAdmissionRequests}>AdmissionRequests</Text>
      </>)
      : <></>
    }

    {/* Student */}
    {true
      ? (<>
        <Text style={NavBarStyles.navItem} onPress={NavToCourseGrades}>CourseGrades</Text>
      </>)
      : <></>
    }

  </View>
);

export default CourseHomeNavbar;
