import React, { useState } from 'react';
import {
  View, Text, Platform, Button,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { LandingPageStyles } from '../../styles/LandingPageStyles';
import { Buttons } from '../../styles/Buttons';
import { Container } from '../../styles/Container';
import { InputField } from '../../styles/InputField';

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

      {Platform.OS !== 'web'
        ? (<View style={Container.CenterOnly}>
          <View style={Buttons.container}>
            <Button onPress={showDatepicker} title={props.title ? props.title : 'Select Date:'}/>
            {show ? <DateTimePicker date={date} onChange={change} value={date} mode={mode} is24Hour={true} display="default"/> : <></>}
          </View>
          <Text>{props.date}</Text>
        </View>)
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
