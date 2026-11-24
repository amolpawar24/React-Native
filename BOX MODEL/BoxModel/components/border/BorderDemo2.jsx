import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BorderDemo2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Individual Borders</Text>

      <View style={styles.box}>
        <Text>Border Top, Bottom, Left & Right</Text>
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
    marginBottom: 25,
    fontWeight: 'bold',
  },
  box: {
    padding: 20,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopColor: 'red',
    borderBottomColor: 'blue',
    borderLeftColor: 'green',
    borderRightColor: 'orange',
  },
});

export default BorderDemo2;