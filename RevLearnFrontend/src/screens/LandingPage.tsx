import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { useEffect } from "react";
import {Button, Platform, Text} from 'react-native';
import WithNavBar from "../components/higher_order_components/WithNavBar";
import { WebStackParamList } from "../Types/NavigatorTypes";

type ScreenNavigationProp = DrawerNavigationProp<
  WebStackParamList,
  'LandingPage'
>;
type Props = {
  navigation: ScreenNavigationProp
}


const LandingPage: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    
  })

  // const navigation = useNavigation();

  const press = () => {
    // navigation.navigate('LoginPage');
    navigation.toggleDrawer();
  }
  return (
    <>
      
      <Text onPress={() => {navigation.navigate('LoginPage')}}>Landing Page</Text>
       <Button title={'press'} onPress={press}>openDrawer</Button>
    </>
  )
}
/* export default WithNavBar(LandingPage); */
export default LandingPage;