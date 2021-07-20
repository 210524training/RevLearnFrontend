import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
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
      <View>
        <Text>Submission ID: {submission.submissionID}</Text>
        <Text>Student ID: {submission.studentID}</Text>
        <Text>Submission Date: {new Date(submission.date).toDateString()}</Text>

        <DynamicDropdown title="Letter Grade:" OptionsList={['A', 'B', 'C', 'D', 'F']} Selected='B' setSelected={setGrade} />
        <Button onPress={handleGradeUpdate} title="Update Grade" />
      </View>
    </>
  );
};

export default WithCourseNavbar(DetailedSubmissionPage);
