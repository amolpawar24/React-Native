import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function MultipleStylesExample() {
 return (
    <View style={styles.container}>

      <View style={[styles.box, styles.box1]}>
        <Text>First View</Text>
      </View>

      <View style={[styles.box, styles.box2]}>
        <Text>Second View</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },

  box: {
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  box1: {
    backgroundColor: 'red',
  },

  box2: {
    backgroundColor: 'blue',
  },
});