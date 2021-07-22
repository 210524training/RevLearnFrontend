import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { TextInput } from 'react-native-paper';
import DynamicDatePicker from '../../components/date_picker/DynamicDatePicker';
import DynamicDropdown from '../../components/form_components/DynamicDropdown';
import WithHomeNavbar from '../../components/higher_order_components/Navbars/WithHomeNavbar';
import { Course } from '../../models/Course';
import { User } from '../../models/User';
import { createNewCourse } from '../../remote/rev_learn_backend_api/RevLearnCoursesAPI';
import { getAllTeachers } from '../../remote/rev_learn_backend_api/RevLearnUsersAPI';
import { Buttons } from '../../styles/Buttons';
import { InputField } from '../../styles/InputField';
import { Container } from '../../styles/Container';

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
    };

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
    <View style={Container.container}>
      <TextInput
        style={ InputField.container }
        label="Course"
        onChangeText={setCourseTitle}
      />
      <TextInput
        style={ InputField.container }
        label="Category"
        onChangeText={setCategory}
      />
      <DynamicDatePicker date={startDate} setDate={setStartDate} title={'Start Date'}/>
      <DynamicDatePicker date={endDate} setDate={setEndDate} title={'End Date'}/>
      <DynamicDropdown title="Teacher:" Selected={selectedTeacher} setSelected={setSelectedTeacher} OptionsList={['No Teacher', ...teacherList.map((teacher) => teacher.username)]} />
      <TextInput
        style={ InputField.container }
        label="Passing Grade"
        onChangeText={setPassingGrade}
      />
      <View style={Buttons.container}>
        <Button
          onPress={handleFormSubmit}
          title="Submit" />
      </View>
    </View>
  );
};
export default WithHomeNavbar(CreateCoursePage);
