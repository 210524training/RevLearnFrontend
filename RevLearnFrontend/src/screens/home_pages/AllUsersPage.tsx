import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import WithHomeNavbar from '../../components/higher_order_components/Navbars/WithHomeNavbar';
import { User } from '../../models/User';
import { getAllUsers } from '../../remote/rev_learn_backend_api/RevLearnUsersAPI';
import { Container } from '../../styles/Container';
import { LandingPageStyles } from '../../styles/LandingPageStyles';
import { Card as StyleCards } from '../../styles/Cards';

const awaitRequest = async (set: React.Dispatch<React.SetStateAction<User[]>>): Promise<void> => set(await getAllUsers());

const AllUsersPage: React.FC<unknown> = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    awaitRequest(setUsers);
  }, []);

  return (
    <ScrollView>
      <View style={Container.container}>
        <Text style={LandingPageStyles.header}>All Users:</Text>
        {users.map((user, index) => (
          <Card key={index} style={StyleCards.container}>
            <Card.Content>
              <Title>{user.username}</Title>
              <Paragraph>{user.role}</Paragraph>
            </Card.Content>
          </Card>
        ))
        }
      </View>
    </ScrollView>
  );
};

export default WithHomeNavbar(AllUsersPage);
