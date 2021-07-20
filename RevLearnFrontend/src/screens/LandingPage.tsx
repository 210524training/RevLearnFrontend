import { useNavigation, useNavigationState } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import {
  Text, View,
} from 'react-native';
import { SafeAreaConsumer, SafeAreaProvider } from 'react-native-safe-area-context';
import WithNavBar from '../components/higher_order_components/Navbars/WithNavBar';
import { LandingNavParamList } from '../types/NavigatorTypes';
import { LandingPageStyles } from '../styles/LandingPageStyles';
import { Container } from '../styles/Container';
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

  const press = () => {
    // navigation.navigate('LoginPage');
  };
  return (
    <View style={ Container.container }>
      <Logo/>
      <Text style = {LandingPageStyles.header }>RevLearn</Text>
      <Text style = {LandingPageStyles.paragraph }>A Student Learning Management System</Text>
    </View>
  );
};
export default WithNavBar(LandingPage);
