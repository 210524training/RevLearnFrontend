import { useNavigation, useNavigationState } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {Button, Platform, Text} from 'react-native';
import { SafeAreaConsumer, SafeAreaProvider } from "react-native-safe-area-context";
import WithNavBar from "../../components/higher_order_components/WithNavBar";
import { LandingNavParamList } from "../Types/NavigatorTypes";

type ScreenNavigationProp = StackNavigationProp<
  LandingNavParamList,
  'LandingScreen'
>;
type Props = {
  navigation: ScreenNavigationProp
}


const LandingPage: React.FC<Props> = () => {

  const navigation = useNavigation();
  const press = () => {
    navigation.navigate('Home', {TabOne: 'TabOne'})
  }

  return (
    <>
      
      <Text onPress={() => {navigation.navigate('LoginPage')}}>Landing Page</Text>
      <Button title={'Login'} onPress={press}>Login</Button>
    </>
  )
}
export default WithNavBar(LandingPage);