import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList } from "../@Types/StackParams";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from '@expo/vector-icons';
import LandingPage from "../component/pages/LandingPage";
import LoginPage from "../component/pages/LoginPage";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="LandingPage"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="LandingPage"
        component={LandingPage}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="LoginPage"
        component={LoginPage}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="pizza-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}