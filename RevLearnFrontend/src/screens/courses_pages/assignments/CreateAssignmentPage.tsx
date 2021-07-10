import React, { useState } from 'react';
import { Text } from 'react-native';
import DynamicDropdown from '../../../components/form_components/DynamicDropdown';
import DynamicSlider from '../../../components/form_components/DynamicSlider';
import WithCourseNavbar from '../../../components/higher_order_components/Navbars/WithCourseNavbar';
import { AssignmentType } from '../../../Types/MyTypes';

type Props = {

}
const CreateAssignmentPage: React.FC<Props> = (props) => {
  const [assignmentType, SetAssignmentType] = useState<string>('Homework');
  const [PassingGrade, SetPassingGrade] = useState<number>(30);
  const Options: string[] = ['Homework', 'Project', 'Paper', 'Report'];

  return (
    <>
      <Text>CreateAssignmentsPage</Text>
      <DynamicDropdown setSelected={SetAssignmentType} OptionsList={Options}/>
      <DynamicSlider SetValue={SetPassingGrade} Step={5} Title={'Passing Grade: '} MaxValue={100} CurrentValue={PassingGrade}/>
    </>
  );
};

export default WithCourseNavbar(CreateAssignmentPage);
