/* eslint-disable import/prefer-default-export */
import { Platform, StyleSheet } from 'react-native';

export const AssignmentPageStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
    padding: 5,
    width: Platform.OS !== 'web' ? '85%' : '90%',
    flexDirection: 'column',
    margin: 20,
    backgroundColor: '#19D9FF',
  },
});
