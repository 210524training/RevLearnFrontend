import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const name: React.ComponentProps<typeof Ionicons>['name'] = 'menu';
const color: string = 'black';

type Props = {
  navigation: any,
}
const DrawerIcon: React.FC<Props> = ({ navigation }) => <Ionicons size={30} style={{ marginBottom: -3 }} name={name} color={color} onPress={() => navigation.toggleDrawer() }/>;

export default DrawerIcon;
