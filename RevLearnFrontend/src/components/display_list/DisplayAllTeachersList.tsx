import React from 'react';
import { View } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import { User } from '../../models/User';
import { Container } from '../../styles/Container';
import { Card as StyleCards } from '../../styles/Cards';

type Props = {
  teachers: User[],
}

const DisplayAllTeachersList: React.FC<Props> = ({ teachers }) => (
  <View style={Container.container}>
    {teachers.map((element, index) => (
      <Card key={index} style={StyleCards.container}>
        <Card.Content>
          <Title>Teacher </Title>
          <Paragraph>Username: {`${element.username}`}</Paragraph>
        </Card.Content>
      </Card>
    ))}
  </View>
);

export default DisplayAllTeachersList;
