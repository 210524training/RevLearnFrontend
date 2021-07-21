import React from 'react';
import { Text, View } from 'react-native';
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
}) => (
  <View style={NavBarStyles.navContainer}>
    <Text style={NavBarStyles.navItem} onPress={NavToHomePage}>HomePage</Text>
    <Text style={NavBarStyles.navItem} onPress={NavToUserInfo}>UserInfo</Text>
    <Text style={NavBarStyles.navItem} onPress={NavToSettings}>Settings</Text>

    {/* Student */}
    {true
      ? <Text style={NavBarStyles.navItem} onPress={NavToGradesOverView}>GradesOverView</Text>
      : <></>
    }

    {/* Admin */}
    {true
      ? (<>
        <Text style={NavBarStyles.navItem} onPress={NavToAllTeachers}>AllTeachers</Text>
        <Text style={NavBarStyles.navItem} onPress={NavToAllCourses}>AllCourses</Text>
        <Text style={NavBarStyles.navItem} onPress={NavToAllUsers}>AllUsers</Text>
      </>)
      : <></>
    }

  </View>
);

export default HomeNavbar;
