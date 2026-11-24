import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MarginDemo1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Basic Margin</Text>

      <View style={styles.box}>
        <Text>First Box</Text>
      </View>

      <View style={styles.box}>
        <Text>Second Box</Text>
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
    width: 200,
    padding: 20,
    backgroundColor: '#93c5fd',
    margin: 15,
    alignItems: 'center',
  },
});

export default MarginDemo1;