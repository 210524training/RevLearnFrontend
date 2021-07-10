import React, { useState } from 'react';
import {
  View, Text, TextInput, Platform, Button,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

type Props = {
  setDate: (dateStr: string) => void,
  date: string,
  title?: string,
}

const DynamicDatePicker: React.FC<Props> = (props) => {
  const [date, setDate] = useState<Date>(new Date());
  const [mode, setMode] = useState<any>('date');
  const [show, setShow] = useState(false);

  const change = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    props.setDate(currentDate.toString());
  };

  const showMode = (currentMode: React.SetStateAction<string>) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  /* const showTimepicker = () => {
    showMode('time');
  }; */

  return (
    <>

      <Text>{props.title ? props.title : 'Select Date:'}</Text>

      {Platform.OS !== 'web'
        ? (<>
          <Button onPress={showDatepicker} title="Show date picker!" />
          {show ? <DateTimePicker date={date} onChange={change} value={date} mode={mode} is24Hour={true} display="default"/> : <></>}
          <Text>{props.date}</Text>
        </>)
        : (
          <View>
            <TextInput placeholder={'MM/DD/YYYY'} onChangeText={(text) => { props.setDate(text); }}/>
          </View>
        )
      }

    </>
  );
};
export default DynamicDatePicker;