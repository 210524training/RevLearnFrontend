/* eslint-disable import/prefer-default-export */
import { Platform, StyleSheet } from 'react-native';

export const Buttons = StyleSheet.create({
  container: {
    width: Platform.OS !== 'web' ? '60%' : '25%',
    marginVertical: 10,
    paddingVertical: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
});
