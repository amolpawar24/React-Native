
import React from 'react';
import { View, Text, Pressable, Alert } from 'react-native';

export default function PressableDelayLongPress() {
  const handleLongPress = () => {
    Alert.alert('Success', 'Long Press Detected!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
        delayLongPress={1000}
        onLongPress={handleLongPress}
        style={{
          backgroundColor: 'green',
          padding: 15,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>
          Hold for 1 Second
        </Text>
      </Pressable>
    </View>
  );
}
