import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';
import DynamicDatePicker from '../../components/date_picker/DynamicDatePicker';
import WithCourseNavbar from '../../components/higher_order_components/Navbars/WithCourseNavbar';

type Props = {

}
const CreateCoursePage: React.FC<Props> = (props) => {
  const [coursetitle, setCourseTitle] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [teacher, setTeacher] = useState<string>('');
  const [passingGrade, setPassingGrade] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  return (
    <>
      <Text>Course Title</Text>
      <TextInput style={{ borderWidth: 1 }} onChangeText={setCourseTitle} />
<<<<<<< HEAD
      <Text>Start Date</Text>
      <DynamicDatePicker date={startDate} setDate={setStartDate}/>
      <DynamicDatePicker date={endDate} setDate={setEndDate}/>
=======
      <DynamicDatePicker date={startDate} setDate={setStartDate} title={'Start Date'}/>
      <DynamicDatePicker date={endDate} setDate={setEndDate} title={'End Date'}/>
>>>>>>> 210425cb29da800487682c36f78ff38856a78e37
    </>
  );
};
export default WithCourseNavbar(CreateCoursePage);
