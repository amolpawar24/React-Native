
import React from 'react';
import { View, Text, Pressable, Alert } from 'react-native';

export default function PressableOnPressIn() {
  const handlePressIn = () => {
    Alert.alert('Pressed', 'You touched the button!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
        onPressIn={handlePressIn}
        style={{
          backgroundColor: 'blue',
          padding: 15,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>
          Press Me
        </Text>
      </Pressable>
    </View>
  );
}
