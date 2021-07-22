import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { User } from '../../models/User';
import { AdmissionRequestStyle } from '../../styles/AdmissionRequestStyle';
import { Container } from '../../styles/Container';
import B from '../BoldText';

type Props = {
  requests: User[],
  onPress: (request: User) => void,
}

const DisplayAdmissionRequestsList: React.FC<Props> = ({ requests, onPress }) => (
  <View style={AdmissionRequestStyle.container}>
    <Text>{requests[0] && requests[0].username}</Text>
    {
      requests.map((request, index) => (
        <View key={index} style={AdmissionRequestStyle.listItemContainer}>
          <View>
            <Text onPress={() => { onPress(request); }}> <B input={'ID: '}/> {request.id} <B input={'User: '}/>{request.username}</Text>
          </View>
        </View>
      ))
    }
  </View>
);

export default DisplayAdmissionRequestsList;
