import React, { useState, useEffect } from 'react';

import { ListItem } from 'react-native-elements';
import { Text } from 'react-native';
import WithHomeNavbar from '../../components/higher_order_components/Navbars/WithHomeNavbar';
import { User } from '../../models/User';
import { getAllUsers } from '../../remote/rev_learn_backend_api/RevLearnUsersAPI';

const awaitRequest = async (set: React.Dispatch<React.SetStateAction<User[]>>): Promise<void> => set(await getAllUsers());

const AllUsersPage: React.FC<unknown> = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    awaitRequest(setUsers);
  }, []);

  return (
    <>
      {
        users.map((user, index) => (
          <ListItem key={index}>
            <Text>{user.userID}: {user.username}</Text>
          </ListItem>
        ))
      }
    </>
  );
};

export default WithHomeNavbar(AllUsersPage);
