import { useNavigation, useNavigationState } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import {
  Button, Text, View,
} from 'react-native';
import { SafeAreaConsumer, SafeAreaProvider } from 'react-native-safe-area-context';
import { loginAsync } from '../hooks/slices/user.slice';
import WithNavBar from '../components/higher_order_components/Navbars/WithNavBar';
import { LandingNavParamList } from '../types/NavigatorTypes';
import { LandingPageStyles } from '../styles/LandingPageStyles';
import { Container } from '../styles/Container';
import { Buttons } from '../styles/Buttons';
import Logo from '../styles/Logo';
import { useAppDispatch, useAppSelector } from '../hooks';

type ScreenNavigationProp = StackNavigationProp<
  LandingNavParamList,
  'Landing'
>;
type Props = {
  navigation: ScreenNavigationProp
  route: any,
}

const LandingPage: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleLogin = async () => {
    await dispatch(loginAsync({ username, password }));
    navigation.navigate('Home', { screen: 'HomePage' });
  };

  const test = route.params;
  const press = () => {
    // navigation.navigate('LoginPage');
  };
  return (
    <View style={ Container.container }>
      <Logo/>
      <Text style = {LandingPageStyles.header }>RevLearn</Text>
      <Text style = {LandingPageStyles.paragraph }>A Student Learning Management System</Text>
      <View style={Buttons.container}>
        <Button
          onPress={handleLogin}
          title="Login"
        ></Button>
      </View>
    </View>
  );
};
export default WithNavBar(LandingPage);
