
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BorderDemo() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>Solid Border</Text>
      </View>

      <View style={styles.box2}>
        <Text>Rounded Border</Text>
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
    backgroundColor: 'lightblue',
    borderWidth: 3,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },

  box2: {
    width: 140,
    height: 120,
    backgroundColor: 'lightyellow',
    borderWidth: 3,
    borderColor: 'orange',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
