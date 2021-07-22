/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';

export const Card = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    width: '85%',
    maxHeight: 140,
    backgroundColor: '#19D9FF',
  },
  userContainer: {
    flex: 1,
    width: '85%',
    backgroundColor: '#19D9FF',
  },
  item: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
});
