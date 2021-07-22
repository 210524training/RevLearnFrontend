/* eslint-disable import/prefer-default-export */
import { Platform, StyleSheet } from 'react-native';

export const AdmissionRequestStyle = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: Platform.OS !== 'web' ? 'row' : 'column',
    // flexWrap: 'wrap',
    padding: 20,
    width: '100%',
    height: '100%',
    backgroundColor: '#00B2D4',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 17,
    flex: 1,
    flexDirection: 'column',
  },
  listItemContainer: {
    // flex: 1,
    padding: 5,
    // width: Platform.OS !== 'web' ? '85%' : '90%',
    // flexDirection: 'column',
    // // flexWrap: 'wrap',
    backgroundColor: '#19D9FF',
    // margin: 20,
  },
  background: {
    flex: 1,
    backgroundColor: '#00B2D4',
    padding: 20,
  },
});
