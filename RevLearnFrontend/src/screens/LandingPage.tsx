import { useNavigation, useNavigationState } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
  Button, Platform, Text, View, ImageBackground,
} from 'react-native';
import { SafeAreaConsumer, SafeAreaProvider } from 'react-native-safe-area-context';
import WithNavBar from '../components/higher_order_components/Navbars/WithNavBar';
import { LandingNavParamList } from '../types/NavigatorTypes';
import { LandingPageStyles } from '../styles/LandingPageStyles';
import { Container } from '../styles/Container';

type ScreenNavigationProp = StackNavigationProp<
  LandingNavParamList,
  'Landing'
>;
type Props = {
  navigation: ScreenNavigationProp
}

const LandingPage: React.FC<Props> = () => {
  const navigation = useNavigation();

  const press = () => {
    // navigation.navigate('LoginPage');

  };
  return (
    <View style={Container.container}>
      <Text style = {LandingPageStyles.h1}>RevLearn</Text>
      <Text style = {LandingPageStyles.h2}>A Student Learning Management System</Text>
    </View>
  );
};
export default WithNavBar(LandingPage);
