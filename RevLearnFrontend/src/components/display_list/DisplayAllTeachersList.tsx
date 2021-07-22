import React, { Dispatch, SetStateAction } from 'react';
import { Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Card, Title } from 'react-native-paper';
import { User } from '../../models/User';
import { Container } from '../../styles/Container';
import { Card as StyleCards } from '../../styles/Cards';

type Props = {
teachers: User[],
setSelected: Dispatch<SetStateAction<string | undefined>>;
}

const DisplayAllTeachersList: React.FC<Props> = ({ teachers, setSelected }) => (
  <View style={Container.container}>
    {teachers.map((element, index) => (
      <Card key={index} style={StyleCards.container}>
        <Card.Content>
          <Title>Teacher Username: {`${element.username}`}</Title>
        </Card.Content>
      </Card>
    ))}
  </View>
);

export default DisplayAllTeachersList;
