/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

export const AllStudentsPageStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'column',
    padding: 20,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#00B2D4',
  },
  listItemContainer: {
    flex: 1,
    padding: 5,
    paddingBottom: 10,
    marginBottom: 5,
    width: Platform.OS !== 'web' ? '75%' : '25%',
    flexDirection: 'column',
    // flexWrap: 'wrap',
    backgroundColor: '#19D9FF',
    margin: 20,
  },
});
