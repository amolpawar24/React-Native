import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PaddingDemo2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Individual Padding</Text>

      <View style={styles.box}>
        <Text style={styles.text}>Padding Example</Text>
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
    fontSize: 22,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  box: {
    backgroundColor: '#bbf7d0',
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default PaddingDemo2;