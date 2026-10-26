import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AutoCorrect() {

  const [name, setName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter the Name"
          autoCorrect={true}
        />

        <Text style={styles.text}>
          Name is: {name}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },

  input: {
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 10,
    margin: 10,
  },

  text: {
    fontSize: 24,
    padding: 10,
  },
});