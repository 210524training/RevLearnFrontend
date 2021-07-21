import React from 'react';
import { Text, View } from 'react-native';
import WithHomeNavbar from '../../components/higher_order_components/Navbars/WithHomeNavbar';
import { useAppSelector } from '../../hooks';
import { UserState, selectUser } from '../../hooks/slices/user.slice';
import { User } from '../../models/User';

type Props = {

}
const UserInfoPage: React.FC<Props> = () => {
  const user: User | null = useAppSelector<UserState>(selectUser);
  return (
    <>
      <Text>User Info Page</Text>
      {user
        ? (
          <View>
            <Text>{user.username}</Text>
            <Text>{user.password}</Text>
            <Text>{user.role}</Text>
            <Text>{user.id}</Text>
          </View>
        )
        : <></>
      }
    </>

  );
};

export default WithHomeNavbar(UserInfoPage);
