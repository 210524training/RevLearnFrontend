import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { User } from '../../models/User';

type Props = {
  requests: User[],
}

const DisplayAdmissionRequestsList: React.FC<Props> = ({ requests }) => (
  <>
    {
      console.log('requests to list: ', requests)
    }
    <Text>{requests[0] && requests[0].username}</Text>
    {
      requests.map((request, index) => (
        <ListItem key={index}>
          {
            console.log('Request: ', request)
          }
          <Pressable onPress={() => { console.log('pressed'); }}>
            <View>
              <Text>User: {request.username}</Text>
            </View>
          </Pressable>
        </ListItem>
      ))
    }
  </>
);

export default DisplayAdmissionRequestsList;
