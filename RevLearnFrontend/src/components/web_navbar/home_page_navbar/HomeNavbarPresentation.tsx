import React from 'react';
import { Text, View } from 'react-native';
import { useAppSelector } from '../../../hooks';
import { UserState, selectUser } from '../../../hooks/slices/user.slice';
import { NavBarStyles } from '../../../styles/NavBarStyles';

type Props = {
  NavToHomePage: () => void,
  NavToUserInfo: () => void,
  NavToSettings: () => void,
  NavToAllUsers: () => void,
  NavToAllTeachers: () => void,
  NavToAllCourses: () => void,
  NavToGradesOverView: () => void,
  role: string
}
const HomeNavbar: React.FC<Props> = ({
  NavToHomePage, NavToUserInfo, NavToSettings, NavToAllUsers, NavToAllTeachers, NavToAllCourses, NavToGradesOverView,
}) => {
  const user = useAppSelector<UserState>(selectUser);
  return (
    <View style={NavBarStyles.navContainer}>
      <Text style={NavBarStyles.navItem} onPress={NavToHomePage}>HomePage</Text>
      <Text style={NavBarStyles.navItem} onPress={NavToUserInfo}>UserInfo</Text>
      <Text style={NavBarStyles.navItem} onPress={NavToSettings}>Settings</Text>

      {/* Student */}
      {
        user?.role === 'Student' && (
          <Text style={NavBarStyles.navItem} onPress={NavToGradesOverView}>GradesOverView</Text>
        )
      }

      {/* Admin */}
      {
        user?.role === 'Admin' && (
          <>
            <Text style={NavBarStyles.navItem} onPress={NavToAllTeachers}>AllTeachers</Text>
            <Text style={NavBarStyles.navItem} onPress={NavToAllCourses}>AllCourses</Text>
            <Text style={NavBarStyles.navItem} onPress={NavToAllUsers}>AllUsers</Text>
          </>
        )
      }
    </View>
  );
};

export default HomeNavbar;
