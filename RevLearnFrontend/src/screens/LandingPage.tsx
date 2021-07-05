import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {Platform, Text} from 'react-native';
import WithNavBar from "../../components/higher_order_components/WithNavBar";
import { WebStackParamList } from "../Types/NavigatorTypes";

type ScreenNavigationProp = StackNavigationProp<
  WebStackParamList,
  'LandingPage'
>;
type Props = {
  navigation: ScreenNavigationProp
}


const LandingPage: React.FC<Props> = ({navigation}) => {

  return (
    <>
      
      <Text onPress={() => {navigation.navigate('LoginPage')}}>Landing Page</Text>
    </>
  )
}
export default WithNavBar(LandingPage);