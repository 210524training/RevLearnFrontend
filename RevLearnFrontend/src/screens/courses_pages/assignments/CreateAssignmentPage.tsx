import React, { useState } from 'react';
import {
  Button, Text, TextInput, View,
} from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import DynamicDatePicker from '../../../components/date_picker/DynamicDatePicker';
import DynamicDropdown from '../../../components/form_components/DynamicDropdown';
import DynamicSlider from '../../../components/form_components/DynamicSlider';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { CreateAssignment } from '../../../remote/rev_learn_backend_api/RevLearnUsersAPI';
import { AssignmentType, LetterGrade } from '../../../types/MyTypes';

type Props = {

}
const CreateAssignmentPage: React.FC<Props> = (props) => {
  const [assignmentType, SetAssignmentType] = useState<string>('Homework');
  const [assignmentTitle, SetAssignmentTitle] = useState<string>('Homework');
  const [assignmentDescription, SetAssignmentDescription] = useState<string>('Homework');
  const [startDateStr, SetStartDateStr] = useState<string>('');
  const [endDateStr, SetEndDateStr] = useState<string>('');
  const [PassingGrade, SetPassingGrade] = useState<string>('');
  const Options: string[] = ['Homework', 'Project', 'Paper', 'Report'];
  const gradeOptions: string[] = ['A', 'B', 'C', 'D', 'F'];

  const handleSubmit = () => {
    const assignment = {
      type: assignmentType as AssignmentType,
      title: assignmentTitle,
      startDate: new Date(startDateStr),
      dueDate: new Date(endDateStr),
      description: assignmentDescription,
      passingGrade: PassingGrade as LetterGrade,
      ID: uuidv4(),
      submissions: [],
    };
    CreateAssignment(assignment);
  };

  return (
    <>
      <Text>CreateAssignmentsPage</Text>
      <View>
        <Text>Assignment Title:</Text>
        <TextInput
          onChangeText={(change) => { SetAssignmentTitle(change); }}
          placeholder={'Creative Writing Paper'}/>
        <Text>{'Assignment'} Discription:</Text>
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
    </>
  );
};

export default WithCourseNavbar(CreateAssignmentPage);
