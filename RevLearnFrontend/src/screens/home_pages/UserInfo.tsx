import React from 'react';
import { Text, View } from 'react-native';
import WithHomeNavbar from '../../components/higher_order_components/Navbars/WithHomeNavbar';
import { User } from '../../models/User';

type Props = {

}
const UserInfoPage: React.FC<Props> = (props) => {
  const user: User = {
    username: 'DallinLemon',
    password: 'Pass',
    courses: [],
    role: 'Student',
    id: '1235',
  };
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
