/* eslint-disable import/prefer-default-export */
import { Platform, StyleSheet } from 'react-native';

export const AllCoursesStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: Platform.OS !== 'web' ? 'row' : 'column',
    flexWrap: 'wrap',
    padding: 20,
    width: '100%',
    backgroundColor: '#00B2D4',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 17,
    flex: 1,
    flexDirection: 'column',
  },
  listItemContainer: {
    flex: 1,
    width: Platform.OS !== 'web' ? '85%' : '90%',
    flexDirection: 'column',
    // flexWrap: 'wrap',
    backgroundColor: 'lightgrey',
    margin: 20,
  },
  value: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});
