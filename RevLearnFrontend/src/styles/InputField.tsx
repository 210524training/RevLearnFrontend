/* eslint-disable import/prefer-default-export */
import { Platform, PlatformColor, StyleSheet } from 'react-native';
import { theme } from './Theme';

export const InputField = StyleSheet.create({
  container: {
    width: Platform.OS !== 'web' ? '100%' : '25%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
});
