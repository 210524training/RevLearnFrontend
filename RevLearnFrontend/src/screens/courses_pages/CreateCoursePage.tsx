import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import DynamicDatePicker from '../../components/date_picker/DynamicDatePicker';
import DynamicDropdown from '../../components/form_components/DynamicDropdown';
import WithCourseNavbar from '../../components/higher_order_components/Navbars/WithCourseNavbar';
import WithHomeNavbar from '../../components/higher_order_components/Navbars/WithHomeNavbar';
import { Course } from '../../models/Course';
import { createNewCourse } from '../../remote/rev_learn_backend_api/RevLearnCoursesAPI';
import { getAllTeachers } from '../../remote/rev_learn_backend_api/RevLearnUsersAPI';

const teachers = getAllTeachers();

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
    const selected = teachers.find((element) => element.username === teacher);
    await createNewCourse({
      id: uuidv4(),
      courseTitle,
      startDate,
      endDate,
      teacherID: selected ? selected.id : 'No teacher found',
      passingGrade,
      students: [],
      activities: [],
      admissionRequests: [],
      category,
    } as Course);
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
      <DynamicDropdown Selected={teacher} setSelected={setTeacher}OptionsList={teacherNames} />
      <Text>Passing Grade:</Text>
      <TextInput style={{ borderWidth: 1 }} onChangeText={setPassingGrade} />
      <Button onPress={handleFormSubmit} title="Submit" />
    </>
  );
};
export default WithHomeNavbar(CreateCoursePage);
