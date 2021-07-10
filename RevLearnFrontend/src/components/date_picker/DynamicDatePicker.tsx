import React from 'react';
import DatePicker from 'react-native-datepicker';
import {
  View, Text, TextInput, Platform,
} from 'react-native';

type Props = {
  setDate: (dateStr: string) => void,
  date: string,
  title?: string,
}

const DynamicDatePicker: React.FC<Props> = (props) => (
  <>

    <Text>{props.title ? props.title : 'Select Date:'}</Text>

    {Platform.OS !== 'web'
      ? <DatePicker date={props.date} onDateChange={(dateStr: string, date: Date) => { props.setDate(dateStr); }}/>
      : (
        <View>
          <TextInput placeholder={'MM/DD/YYYY'} onChange={(event) => { props.setDate(event.target.toString()); }}/>
        </View>
      )

    }
  </>
);
export default DynamicDatePicker;
