
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MarginDemo() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>Box 1</Text>
      </View>

      <View style={styles.box2}>
        <Text>Box 2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  box1: {
    width: 150,
    height: 100,
    backgroundColor: 'skyblue',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  box2: {
    width: 150,
    height: 100,
    backgroundColor: 'orange',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
