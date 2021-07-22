/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ImageBackground, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

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
  CenterOnly: {
    width: Platform.OS !== 'web' ? '60%' : '25%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
