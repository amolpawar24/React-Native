
import React from 'react';
import { View, Button } from 'react-native';

export default function ButtonColor() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20, gap: 15 }}>
      <Button title="Blue Button" color="blue" onPress={() => {}} />
      <Button title="Red Button" color="red" onPress={() => {}} />
      <Button title="Green Button" color="green" onPress={() => {}} />
    </View>
  );
}
