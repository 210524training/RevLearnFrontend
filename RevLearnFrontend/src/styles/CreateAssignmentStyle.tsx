/* eslint-disable import/prefer-default-export */
import { Platform, StyleSheet } from 'react-native';

export const CreateAssignmentStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#00B2D4',
  },
  header: {
    margin: 20,
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
  },
  listItemContainer: {
    width: Platform.OS !== 'web' ? '85%' : '90%',
    margin: 20,
    justifyContent: 'center',
    backgroundColor: '#19D9FF',
  },
  item: {
    padding: 20,
  },
  item1: {
    margin: 20,
  },
  background: {
    backgroundColor: '#19D9FF',
  },
  background2: {
    backgroundColor: '#00B2D4',
    padding: 20,
  },
});
