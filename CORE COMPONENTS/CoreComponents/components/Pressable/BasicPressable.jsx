
import React from 'react';
import { View, Text, Pressable } from 'react-native';

export default function BasicPressable() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable onPress={() => console.log('Button Pressed')}>
        <Text>Click Me</Text>
      </Pressable>
    </View>
  );
}
