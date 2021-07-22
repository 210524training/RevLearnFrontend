import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Button, Text, View,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { v4 as uuidv4 } from 'uuid';
import DynamicDatePicker from '../../../components/date_picker/DynamicDatePicker';
import DynamicDropdown from '../../../components/form_components/DynamicDropdown';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { CourseState, getCourse, setCourse } from '../../../hooks/slices/course.slice';
import { Course } from '../../../models/Course';
import { Assignment } from '../../../models/Assignment';
import { updateCourse } from '../../../remote/rev_learn_backend_api/RevLearnCoursesAPI';
import { AssignmentType, LetterGrade } from '../../../Types/MyTypes';
import { LandingPageStyles } from '../../../styles/LandingPageStyles';
import { Container } from '../../../styles/Container';

type Props = {

}

const CreateAssignmentPage: React.FC<Props> = () => {
  const course = useAppSelector<CourseState>(getCourse);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const [assignmentType, SetAssignmentType] = useState<string>('Homework');
  const [assignmentTitle, SetAssignmentTitle] = useState<string>('Homework');
  const [assignmentDescription, SetAssignmentDescription] = useState<string>('Homework');
  const [startDateStr, SetStartDateStr] = useState<string>('');
  const [endDateStr, SetEndDateStr] = useState<string>('');
  const [PassingGrade, SetPassingGrade] = useState<string>('');
  const Options: string[] = ['Homework', 'Project', 'Paper', 'Report'];
  const gradeOptions: string[] = ['A', 'B', 'C', 'D', 'F'];

  const handleSubmit = async () => {
    if(course) {
      const assignment: Assignment = {
        type: assignmentType as AssignmentType,
        title: assignmentTitle,
        startDate: new Date(startDateStr),
        dueDate: new Date(endDateStr),
        description: assignmentDescription,
        passingGrade: PassingGrade as LetterGrade,
        ID: uuidv4(),
        submissions: [],
      };

      const updatedCourse: Course = {
        ...course,
        activities: [
          ...course.activities,
          assignment,
        ],
      };

      console.log(updatedCourse);
      await updateCourse(updatedCourse);
      dispatch(setCourse(updatedCourse));
      navigation.navigate('AssignmentsPage');
    }
  };

  return (
    <View>
      <View>
        <Text style={LandingPageStyles.headerFont}>Assignment Title:</Text>
        <TextInput
          onChangeText={(change) => { SetAssignmentTitle(change); }}
          placeholder={'Creative Writing Paper'}/>
        <Text style={LandingPageStyles.headerFont}>{'Assignment'} Description:</Text>
        <TextInput
          multiline={true}
          onChangeText={(change) => { SetAssignmentDescription(change); }}
          placeholder={'Enter a discription of the Assignment.'}/>
      </View>
      <DynamicDropdown Selected={assignmentType} setSelected={SetAssignmentType} OptionsList={Options} title={'Assignment Type'}/>
      <DynamicDropdown Selected={PassingGrade} OptionsList={gradeOptions} setSelected={SetPassingGrade} title={'Passing Grade'}/>
      {/* <DynamicSlider SetValue={SetPassingGrade} Step={5} Title={'Passing Grade: '} MaxValue={100} MinValue={50} CurrentValue={PassingGrade}/> */}
      <DynamicDatePicker date={startDateStr} setDate={SetStartDateStr} title={'Start Date'}/>
      <DynamicDatePicker date={endDateStr} setDate={SetEndDateStr} title={'End Date'}/>
      <Button title={'Submit'} onPress={handleSubmit}/>
    </View>
  );
};

export default WithCourseNavbar(CreateAssignmentPage);
