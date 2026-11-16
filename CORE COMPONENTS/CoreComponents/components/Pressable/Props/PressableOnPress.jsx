
import React from 'react';
import { View, Text, Pressable, Alert } from 'react-native';

export default function PressableOnPress() {
  const handlePress = () => {
    Alert.alert('Success', 'Button Pressed!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
        onPress={handlePress}
        style={{
          backgroundColor: 'blue',
          padding: 15,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>
          Click Me
        </Text>
      </Pressable>
    </View>
  );
}
