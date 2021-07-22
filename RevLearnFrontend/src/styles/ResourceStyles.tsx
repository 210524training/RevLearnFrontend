/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

export const ResourceStyles = StyleSheet.create({
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

export const AddResourceStyles = StyleSheet.create({
  background: {
    backgroundColor: '#00B2D4',
    width: '100%',
    height: '100%',
  },
  container: {
    paddingHorizontal: 15,
    width: '100%',
    height: '100%',
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

  flex: {
    flexDirection: 'row',
  },

  inputItem: {
    marginBottom: 20,
    marginTop: 5,
    backgroundColor: 'white',
    fontSize: 21,
    fontWeight: 'bold',
  },

  inputText: {
    marginBottom: 20,
    marginTop: 5,
    backgroundColor: 'white',
    height: 40,
  },

  inputItemMulti: {
    marginBottom: 20,
    marginTop: 5,
    backgroundColor: 'white',
  },

});
