/* eslint-disable global-require */
import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
    marginBottom: 8,
  },
});

export default function Logo() {
  return <Image source={require('../../assets/images/Logo.png')} style={styles.image} />;
}
