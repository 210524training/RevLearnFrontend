import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { useAppSelector } from '../../../hooks';
import { CourseState, getCourse } from '../../../hooks/slices/course.slice';
import { AssignmentSubmission } from '../../../models/AssignmentSubmission';

type Props = {
  route: any
}

const AssignmentsSubmissionsPage: React.FC<Props> = ({ route }) => {
  // eslint-disable-next-line no-undef
  const { assignment } = route.params;
  const [submissions, setSubmissions] = useState<AssignmentSubmission[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    if(assignment) {
      setSubmissions(assignment.submissions);
    }
  }, []);

  const NavToSubmissionDetails = (submission: AssignmentSubmission) => {
    navigation.navigate('DetaliedSubmissionPage', { submission });
  };

  return (
    <>
      <Text>Submissions for {assignment.title}</Text>
      {
        submissions.map((submission, index) => (
          <ListItem key={index}>
            <Pressable onPress={() => { NavToSubmissionDetails(submission); }}>
              <View>
                <Text>Submission ID:{submission.submissionID}, Student ID: {submission.studentID}</Text>
              </View>
            </Pressable>
          </ListItem>
        ))
      }
    </>
  );
};

export default WithCourseNavbar(AssignmentsSubmissionsPage);
