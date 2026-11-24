import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PaddingDemo1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Basic Padding</Text>

      <View style={styles.box}>
        <Text style={styles.text}>Hello React Native</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  box: {
    backgroundColor: '#93c5fd',
    padding: 30,
  },
  text: {
    fontSize: 18,
    color: '#1e3a8a',
  },
});

export default PaddingDemo1;