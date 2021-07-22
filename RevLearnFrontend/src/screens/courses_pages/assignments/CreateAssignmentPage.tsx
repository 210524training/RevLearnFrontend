import { useNavigation } from '@react-navigation/native';
import React, { useState, useImperativeHandle, useEffect } from 'react';
import {
  Platform, ScrollView, Text, View,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { v4 as uuidv4 } from 'uuid';
import DynamicDatePicker from '../../../components/date_picker/DynamicDatePicker';
import DynamicDropdown from '../../../components/form_components/DynamicDropdown';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { CourseState, getCourse, setCourse } from '../../../hooks/slices/course.slice';
import { Course } from '../../../models/Course';
import { Assignment } from '../../../models/Assignment';
import { updateCourse } from '../../../remote/rev_learn_backend_api/RevLearnCoursesAPI';
import { AssignmentType, LetterGrade } from '../../../types/MyTypes';
import { CreateAssignmentStyle } from '../../../styles/CreateAssignmentStyle';
import B from '../../../components/BoldText';

type Props = {

}

const CreateAssignmentPage: React.FC<Props> = () => {
  const course = useAppSelector<CourseState>(getCourse);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const [assignmentType, SetAssignmentType] = useState<string>('Homework');
  const [assignmentTitle, SetAssignmentTitle] = useState<string>('Homework');
  const [assignmentDescription, SetAssignmentDescription] = useState<string>('Homework');
  const [startDateStr, SetStartDateStr] = useState<string>(new Date(Date.now()).toString());
  const [endDateStr, SetEndDateStr] = useState<string>(new Date(Date.now()).toString());
  const [startDate, SetStartDate] = useState<string>('');
  const [endDate, SetEndDate] = useState<string>('');
  const [PassingGrade, SetPassingGrade] = useState<string>('');
  const Options: string[] = ['Homework', 'Project', 'Paper', 'Report'];
  const gradeOptions: string[] = ['A', 'B', 'C', 'D', 'F'];

  useEffect(() => {
    const start = startDateStr.split(' ');
    const end = endDateStr.split(' ');
    SetStartDate(`${start[1]} ${start[2]} ${start[3]}`);
    SetEndDate(`${end[1]} ${end[2]} ${end[3]}`);
  }, [startDateStr, endDateStr]);

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
    <ScrollView style={CreateAssignmentStyle.background2}>
      {Platform.OS === 'web' && <B input={'Create Assignments Page'}/>}
      <View>
        <View style={CreateAssignmentStyle.item}><B input={'Assignment Title: '}/></View>
        <TextInput
          onChangeText={(change) => { SetAssignmentTitle(change); }}
          placeholder={'Creative Writing Paper'}/>
        <View style={CreateAssignmentStyle.item}><B input={'Assignment Description:'}/></View>
        <TextInput
          multiline={true}
          onChangeText={(change) => { SetAssignmentDescription(change); }}
          placeholder={'Enter a discription of the Assignment.'}/>
      </View>
      <DynamicDropdown Selected={assignmentType} setSelected={SetAssignmentType} OptionsList={Options} title={'Assignment Type'}/>
      <DynamicDropdown Selected={PassingGrade} OptionsList={gradeOptions} setSelected={SetPassingGrade} title={'Passing Grade'}/>
      {/* <DynamicSlider SetValue={SetPassingGrade} Step={5} Title={'Passing Grade: '} MaxValue={100} MinValue={50} CurrentValue={PassingGrade}/> */}
      <DynamicDatePicker date={startDate} setDate={SetStartDateStr} title={'Start Date'}/>
      <DynamicDatePicker date={endDate} setDate={SetEndDateStr} title={'End Date'}/>
      <Button style={CreateAssignmentStyle.item1} mode="contained" color="#19D9FF" onPress={handleSubmit}>Create Assignment</Button>
    </ScrollView>
  );
};

export default WithCourseNavbar(CreateAssignmentPage);
