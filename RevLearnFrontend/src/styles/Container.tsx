/* eslint-disable import/prefer-default-export */
import {
  Platform, StyleSheet,
} from 'react-native';

export const Container = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#00B2D4',
    justifyContent: 'center',
  },
  assignmentContainer: {
    flex: 1,
    padding: 20,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#00B2D4',
  },
  createQuizContainer: {
    width: Platform.OS !== 'web' ? '100%' : '25%',
  },
  quizPageContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
  CenterOnly: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#00B2D4',
    justifyContent: 'center',
  },
  quizHeadingContainer: {
    marginBottom: 10,
  },
});
