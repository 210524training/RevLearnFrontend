import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Text, TextInput } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import DynamicDatePicker from '../../components/date_picker/DynamicDatePicker';
import DynamicDropdown from '../../components/form_components/DynamicDropdown';
import WithHomeNavbar from '../../components/higher_order_components/Navbars/WithHomeNavbar';
import { Course } from '../../models/Course';
import { User } from '../../models/User';
import { createNewCourse } from '../../remote/rev_learn_backend_api/RevLearnCoursesAPI';
import { getAllTeachers } from '../../remote/rev_learn_backend_api/RevLearnUsersAPI';

type Props = {

}

const CreateCoursePage: React.FC<Props> = () => {
  const [courseTitle, setCourseTitle] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [passingGrade, setPassingGrade] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [teacherList, setTeacherList] = useState<User[]>([]);
  const [selectedTeacher, setSelectedTeacher] = useState<string>('No Teacher');

  const navigation = useNavigation();

  useEffect(() => {
    const getAndSetTeachers = async () => {
      const teachers = await getAllTeachers();
      setTeacherList(teachers);
    }

    getAndSetTeachers();
  }, []);

  const handleFormSubmit = async () => {
    const selected = teacherList.find((element) => element.username === selectedTeacher);
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
      resources: [],
    } as Course);

    navigation.navigate('AllCoursesPage');
  };

  return (
    <>
      <Text>Course Title:</Text>
      <TextInput style={{ borderWidth: 1 }} onChangeText={setCourseTitle} />
      <DynamicDatePicker date={startDate} setDate={setStartDate} title={'Start Date'}/>
      <DynamicDatePicker date={endDate} setDate={setEndDate} title={'End Date'}/>
      <Text>Category:</Text>
      <TextInput style={{ borderWidth: 1 }} onChangeText={setCategory} />
      <DynamicDropdown title="Teacher:" Selected={selectedTeacher} setSelected={setSelectedTeacher} OptionsList={['No Teacher', ...teacherList.map((teacher) => teacher.username)]} />
      <Text>Passing Grade:</Text>
      <TextInput style={{ borderWidth: 1 }} onChangeText={setPassingGrade} />
      <Button onPress={handleFormSubmit} title="Submit" />
    </>
  );
};
export default WithHomeNavbar(CreateCoursePage);
