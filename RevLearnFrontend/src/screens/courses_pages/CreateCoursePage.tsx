import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native';
import DynamicDatePicker from '../../components/date_picker/DynamicDatePicker';
import DynamicDropdown from '../../components/form_components/DynamicDropdown';
import WithCourseNavbar from '../../components/higher_order_components/Navbars/WithCourseNavbar';
import { createNewCourse } from '../../remote/RevLearnBackendAPI';

const teachers = [
  {
    username: 'Brenda',
    password: '123',
    courses: [],
    role: 'Teacher',
    userID: '456',
  },

  {
    username: 'Donna',
    password: '123',
    courses: [],
    role: 'Teacher',
    userID: '123',
  },
];

const teacherNames: string[] = teachers.map((element) => (element.username));

type Props = {

}
const CreateCoursePage: React.FC<Props> = (props) => {
  const [courseTitle, setCourseTitle] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [teacher, setTeacher] = useState<string>('');
  const [passingGrade, setPassingGrade] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const handleFormSubmit = async () => {
    await createNewCourse(courseTitle, startDate, endDate, teacher, passingGrade, category);
  };

  return (
    <>
      <Text>Course Title:</Text>
      <TextInput style={{ borderWidth: 1 }} onChangeText={setCourseTitle} />
      <DynamicDatePicker date={startDate} setDate={setStartDate} title={'Start Date'}/>
      <DynamicDatePicker date={endDate} setDate={setEndDate} title={'End Date'}/>
      <Text>Category:</Text>
      <TextInput style={{ borderWidth: 1 }} onChangeText={setCategory} />
      <Text>Teacher:</Text>
      <DynamicDropdown setSelected={setTeacher}OptionsList={teacherNames} />
      <Text>Passing Grade:</Text>
      <TextInput style={{ borderWidth: 1 }} onChangeText={setPassingGrade} />
      <Button onPress={handleFormSubmit} title="Submit" />
    </>
  );
};
export default WithCourseNavbar(CreateCoursePage);
