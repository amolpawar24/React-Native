
import React from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';

export default function LocalBackground() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/pexels-ankit-rainloure-1425442-35771810.jpg')}
        style={styles.background}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    width: '100%',
    height: 400,
  },
});
