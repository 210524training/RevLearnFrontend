import React, { Dispatch, SetStateAction } from 'react';
import { View } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
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
          <Title>Teacher </Title>
          <Paragraph>Username: {`${element.username}`}</Paragraph>
        </Card.Content>
      </Card>
    ))}
  </View>
);

export default DisplayAllTeachersList;
