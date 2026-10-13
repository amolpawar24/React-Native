import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StyleInheritanceDemo() {
  return (
    <View style={styles.container}>
      <Text style={styles.parentText}>
        Parent Text
        <Text style={styles.childText}>
          {'\n'}Child Text
        </Text>
      </Text>
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

  parentText: {
    fontSize: 22,
    color: 'blue',
    fontWeight: 'bold',
  },

  childText: {
    color: 'red',
  },
});