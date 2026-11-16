
import React from 'react';
import { View, Text, Pressable, Alert } from 'react-native';

export default function PressableOnPressOut() {
  const handlePressOut = () => {
    Alert.alert('Released', 'You released the button!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
        onPressOut={handlePressOut}
        style={{
          backgroundColor: 'purple',
          padding: 15,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>
          Press and Release Me
        </Text>
      </Pressable>
    </View>
  );
}
