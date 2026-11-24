import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MarginDemo2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Individual Margin</Text>

      <View style={styles.box}>
        <Text>Margin Example</Text>
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
  },
  box: {
    backgroundColor: '#bbf7d0',
    padding: 20,
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 10,
  },
});

export default MarginDemo2;