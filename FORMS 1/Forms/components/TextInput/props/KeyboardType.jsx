import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function KeyboardType() {
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter the password"
          keyboardType="numeric"
          secureTextEntry={true}
        />

        <Text style={styles.text}>
          Password is: {password}
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