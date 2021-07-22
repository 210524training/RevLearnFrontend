/* eslint-disable arrow-body-style */
import { Ionicons } from '@expo/vector-icons';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from 'react-native';

const name: React.ComponentProps<typeof Ionicons>['name'] = 'menu';
const color: string = 'black'

type Props = {
  navigation: any,
}
const DrawerIcon: React.FC<Props> = ({ navigation }) => {
  // const navigation = useNavigation();
  /* const openDrawer = () => {
    navigation.
  } */
  return <Ionicons size={30} style={{ marginBottom: -3 }} name={name} color={color} onPress={() => navigation.toggleDrawer() }/>;
};

export default DrawerIcon;
