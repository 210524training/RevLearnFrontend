import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { Assignment } from '../../../models/Assignment';
import DynamicDropdown from '../../../components/form_components/DynamicDropdown';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { CourseState, getCourse, setCourse } from '../../../hooks/slices/course.slice';
import { Activity } from '../../../models/Activity';
import { Submission } from '../../../models/Submission';
import { updateCourse } from '../../../remote/rev_learn_backend_api/RevLearnCoursesAPI';
import { Course } from '../../../models/Course';
import { Quiz } from '../../../models/Quiz';
import { Container } from '../../../styles/Container';
import { AllCoursesStyle } from '../../../styles/AllCoursesStyle';
import { Card as StyleCards } from '../../../styles/Cards';

type Props = {
  route: any
}

const DetailedSubmissionPage: React.FC<Props> = ({ route }) => {
  const { submission, assignment } = route.params;
  const course = useAppSelector<CourseState>(getCourse);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [grade, setGrade] = useState<string>('B');

  const handleGradeUpdate = async () => {
    if(course) {
      const updatedSubmission = {
        ...submission,
        grade,
      };

      const updatedSubmissionsList: Submission[] = assignment.submissions.filter((sub: Submission) => sub.submissionID !== submission.submissionID);
      updatedSubmissionsList.push(updatedSubmission);

      const updatedAssignment: Assignment = {
        ...assignment,
        submissions: updatedSubmissionsList,
      };

      const updatedActivities: (Assignment | Quiz)[] = course.activities.filter((activity: Activity) => activity.ID !== updatedAssignment.ID);
      updatedActivities.push(updatedAssignment);

      const updatedCourse: Course = {
        ...course,
        activities: updatedActivities,
      };

      console.log(updatedCourse);

      await updateCourse(updatedCourse);
      dispatch(setCourse(updatedCourse));
    }
  };

  return (
    <>
      <View style={ Container.assignmentContainer }>
        <Card style={StyleCards.container}>
          <Card.Content>
            <Text><Text style={AllCoursesStyle.header}>Submission ID: </Text>{`${submission.submissionID}`}</Text>
            <Text><Text style={AllCoursesStyle.header}>Student ID: </Text>{`${submission.studentID}`}</Text>
            <Text><Text style={AllCoursesStyle.header}>Submission Date: </Text>{new Date(submission.date).toDateString()}</Text>
          </Card.Content>
        </Card>
        <DynamicDropdown title="Letter Grade:" OptionsList={['A', 'B', 'C', 'D', 'F']} Selected='B' setSelected={setGrade} />
        <Button color='#19D9FF' mode={'contained'} onPress={handleGradeUpdate}>Update Grade</Button>
      </View>
    </>
  );
};

export default WithCourseNavbar(DetailedSubmissionPage);
