import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { User } from '../../models/User';

type Props = {
  requests: User[],
  onPress: (request: User) => void,
}

const DisplayAdmissionRequestsList: React.FC<Props> = ({ requests, onPress }) => (
  <>
    {
      requests.map((request, index) => (
        <ListItem key={index}>
          <Pressable onPress={() => { onPress(request); }}>
            <View>
              <Text>ID: {request.id}, User: {request.username}</Text>
            </View>
          </Pressable>
        </ListItem>
      ))
    }
  </>
);

export default DisplayAdmissionRequestsList;
