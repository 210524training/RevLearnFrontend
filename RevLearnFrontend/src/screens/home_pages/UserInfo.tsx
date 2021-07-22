import React from 'react';
import { Text, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import WithHomeNavbar from '../../components/higher_order_components/Navbars/WithHomeNavbar';
import { useAppSelector } from '../../hooks';
import { UserState, selectUser } from '../../hooks/slices/user.slice';
import { User } from '../../models/User';
import { Container } from '../../styles/Container';
import { Card as StyleCards } from '../../styles/Cards';
import { LandingPageStyles } from '../../styles/LandingPageStyles';

type Props = {

}
const UserInfoPage: React.FC<Props> = () => {
  const user: User | null = useAppSelector<UserState>(selectUser);
  return (
    <View style={Container.container}>
      <Text style={LandingPageStyles.header}>User Info Page</Text>
      {user
        ? (
          <Card style={StyleCards.container}>
            <Card.Content>
              <Title>Hello, {user.username}</Title>
              <Paragraph>Password: {user.password}</Paragraph>
              <Text>Role: {user.role}</Text>
              <Text>ID: {user.id}</Text>
            </Card.Content>
          </Card>
        )
        : <></>
      }
    </View>
  );
};

export default WithHomeNavbar(UserInfoPage);
