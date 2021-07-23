import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { useAppSelector } from '../../../hooks';
import { CourseState, getCourse } from '../../../hooks/slices/course.slice';
import { AssignmentSubmission } from '../../../models/AssignmentSubmission';
import { Card as StyleCards } from '../../../styles/Cards';
import { Container } from '../../../styles/Container';
import { LandingPageStyles } from '../../../styles/LandingPageStyles';

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
    navigation.navigate('DetaliedSubmissionPage', { submission, assignment });
  };

  return (
    <View style={Container.assignmentContainer}>
      <Text style={LandingPageStyles.header}>Submissions for {assignment.title}</Text>
      {
        submissions.map((submission, index) => (
          <Card style={ StyleCards.container} key={index}>
            <Card.Content>
              <Title onPress={() => { NavToSubmissionDetails(submission); }}>Submission ID:{submission.submissionID}</Title>
              <Paragraph>Student ID: {submission.studentID}</Paragraph>
            </Card.Content>
          </Card>
        ))
      }
    </View>
  );
};

export default WithCourseNavbar(AssignmentsSubmissionsPage);
