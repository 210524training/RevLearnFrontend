import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useColorScheme } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
     <Navigation colorScheme={colorScheme} /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
