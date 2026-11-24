import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ContentDemo1 = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.heading}>React Native Box Model</Text>

      <View style={styles.box}>
        <Text style={styles.content}>
          This is Content
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
  },

  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  box: {
    width: 250,
    height: 150,
    backgroundColor: '#93c5fd',
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    fontSize: 20,
    color: '#1e3a8a',
    fontWeight: 'bold',
  },
});
