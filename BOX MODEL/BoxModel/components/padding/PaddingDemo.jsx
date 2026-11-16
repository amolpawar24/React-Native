
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PaddingDemo() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Box 1</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.text}>Box 2</Text>
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
  },

  box: {
    width: 120,
    height: 120,
    backgroundColor: 'skyblue',
    padding: 20,
    margin: 10,
    borderWidth: 2,
    borderColor: 'blue',
  },

  text: {
    backgroundColor: 'orange',
  },
});
