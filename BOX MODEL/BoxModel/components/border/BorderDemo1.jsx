
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BorderDemo1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>React Native Border Demo</Text>

      <View style={styles.box}>
        <Text style={styles.text}>Border Example</Text>
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
    color: '#1e293b',
  },

  box: {
    width: 250,
    height: 150,
    borderWidth: 4,
    borderColor: '#6366f1',
    borderRadius: 15,
    backgroundColor: '#dbeafe',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
});

export default BorderDemo1;
