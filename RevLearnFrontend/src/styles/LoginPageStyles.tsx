/* eslint-disable import/prefer-default-export */
import { executeReducerBuilderCallback } from '@reduxjs/toolkit/dist/mapBuilders';
import { StyleSheet } from 'react-native';

export const LoginPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  inputField: {
    borderRadius: 2,
    borderWidth: 2,
    marginVertical: 20,
    padding: 5,
  },
});