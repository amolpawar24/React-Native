import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function InternalStylingExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Using Stylesheet API
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
});