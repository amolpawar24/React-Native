import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PaddingDemo3 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Horizontal & Vertical Padding</Text>

      <View style={styles.box}>
        <Text style={styles.text}>React Native Development</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  box: {
    backgroundColor: '#fde68a',
    paddingHorizontal: 40,
    paddingVertical: 25,
  },
  text: {
    fontSize: 18,
  },
});

export default PaddingDemo3;