
import React from 'react';
import { View, Text, Pressable, Alert } from 'react-native';

export default function PressableHitSlop() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
        hitSlop={30}
        onPress={() => Alert.alert('Success', 'Button Pressed!')}
        style={{
          backgroundColor: 'blue',
          padding: 5,
        }}
      >
        <Text style={{ color: 'white' }}>
          Small Button
        </Text>
      </Pressable>
    </View>
  );
}
