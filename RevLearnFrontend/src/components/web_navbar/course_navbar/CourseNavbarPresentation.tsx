import React from 'react';
import { Text, View } from 'react-native';
import { useAppSelector } from '../../../hooks';
import { UserState, selectUser } from '../../../hooks/slices/user.slice';
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
}
const CourseHomeNavbar: React.FC<Props> = ({
  NavToCourseHome, NavToCourseResources, NavToAssignments, NavToQuizzes, NavToCourseInfo, NavToCourseGrades, NavToAdmissionRequests, NavToStudents, NavToAllCourseGrades,
}) => {
  const user = useAppSelector<UserState>(selectUser);
  return (
    <View style={NavBarStyles.navContainer}>
      <Text style={NavBarStyles.navItem} onPress={NavToCourseHome}>CourseHome</Text>
      <Text style={NavBarStyles.navItem} onPress={NavToCourseResources}>CourseResources</Text>
      <Text style={NavBarStyles.navItem} onPress={NavToAssignments}>Assignments</Text>
      <Text style={NavBarStyles.navItem} onPress={NavToQuizzes}>Quizzes</Text>
      <Text style={NavBarStyles.navItem} onPress={NavToCourseInfo}>CourseInfo</Text>

      <Text style={NavBarStyles.navItem} onPress={NavToCourseGrades}>CourseGrades</Text>
      {/* Teacher */}
      {
        user?.role === 'Teacher' && (
          <>
            <Text style={NavBarStyles.navItem} onPress={NavToStudents}>Students</Text>
            <Text style={NavBarStyles.navItem} onPress={NavToAdmissionRequests}>AdmissionRequests</Text>
          </>
        )
      }

      {/* Student */}
      {
        user?.role === 'Student' && (
          <>
            <Text style={NavBarStyles.navItem} onPress={NavToCourseGrades}>CourseGrades</Text>
          </>
        )
      }
    </View>
  );
};

export default CourseHomeNavbar;
