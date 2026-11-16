
import React from 'react';
import { View, Text, Pressable, Alert } from 'react-native';

export default function PressableOnLongPress() {
  const handleLongPress = () => {
    Alert.alert('Success', 'Button Long Pressed!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
        onLongPress={handleLongPress}
        style={{
          backgroundColor: 'green',
          padding: 15,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>
          Press and Hold Me
        </Text>
      </Pressable>
    </View>
  );
}
