/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

export const CourseHome = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#00B2D4',
    // justifyContent: 'center',
  },

  card: {
    margin: 10,
    width: Platform.OS !== 'web' ? '95%' : '25%',
    backgroundColor: '#19D9FF',
    padding: 20,
  },

  item: {
    marginBottom: 5,
    marginTop: 5,
  },

});
