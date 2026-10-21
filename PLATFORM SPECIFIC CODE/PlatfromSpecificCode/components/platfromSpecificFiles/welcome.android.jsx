import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Android!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "plum"

    },
    text : {
        padding: 25,
        fontSize: 24,
        fontWeight: "bold"
    }
})