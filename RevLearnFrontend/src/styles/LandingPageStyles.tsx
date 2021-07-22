/* eslint-disable import/prefer-default-export */
import { StyleSheet } from 'react-native';
import { theme } from './Theme';

export const LandingPageStyles = StyleSheet.create({
  header: {
    fontSize: 21,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
  headerFont: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  },
  h2: {
    fontSize: 18,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
