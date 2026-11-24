import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StyleInheritanceDemo1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.parentText}>
        Hello React Native!

        <Text style={styles.childText}>
          {' '}Welcome to Style Inheritance.
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  parentText: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
  },

  childText: {
    color: 'red',
  },
});

export default StyleInheritanceDemo1;