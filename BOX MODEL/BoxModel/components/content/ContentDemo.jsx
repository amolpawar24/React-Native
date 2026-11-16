
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContentDemo() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>Content 1</Text>
      </View>

      <View style={styles.box2}>
        <Text style={styles.text}>Content 2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },

  box1: {
    width: 140,
    height: 120,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },

  box2: {
    width: 140,
    height: 120,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 16,
    color: 'black',
  },
});
