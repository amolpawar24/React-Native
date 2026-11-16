
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function ScrollViewComponent2() {
  return (
    <View style={styles.container}>

      <Text style={styles.heading}>ScrollView Example</Text>

      <ScrollView>
        <Text style={styles.text}>Item 1</Text>
        <Text style={styles.text}>Item 2</Text>
        <Text style={styles.text}>Item 3</Text>
        <Text style={styles.text}>Item 4</Text>
        <Text style={styles.text}>Item 5</Text>
        <Text style={styles.text}>Item 6</Text>
        <Text style={styles.text}>Item 7</Text>
        <Text style={styles.text}>Item 8</Text>
        <Text style={styles.text}>Item 9</Text>
        <Text style={styles.text}>Item 10</Text>
        <Text style={styles.text}>Item 11</Text>
        <Text style={styles.text}>Item 12</Text>
        <Text style={styles.text}>Item 13</Text>
        <Text style={styles.text}>Item 14</Text>
        <Text style={styles.text}>Item 15</Text>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  text: {
    fontSize: 18,
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#E2E8F0',
  },
});
