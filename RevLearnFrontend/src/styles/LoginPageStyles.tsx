/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';
import { theme } from './Theme';

export const LoginPageStyles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
