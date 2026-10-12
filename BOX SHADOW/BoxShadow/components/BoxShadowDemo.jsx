
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BoxShadowDemo() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Box Shadow Demo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },

  box: {
    width: 220,
    height: 120,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',

    // iOS shadow properties
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,

    // Android shadow property
    elevation: 8,
  },

  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222222',
  },
});
