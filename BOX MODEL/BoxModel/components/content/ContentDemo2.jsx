import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ContentDemo2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>Amol Pawar</Text>
        <Text style={styles.role}>React Native Developer</Text>
        <Text style={styles.description}>
          Learning React Native Box Model.
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

  card: {
    width: 300,
    padding: 20,
    margin: 15,
    borderWidth: 2,
    borderColor: '#6366f1',
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1e293b',
  },

  role: {
    fontSize: 16,
    color: '#6366f1',
    marginBottom: 12,
  },

  description: {
    fontSize: 14,
    color: '#64748b',
  },
});
