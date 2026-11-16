
import React from 'react';
import { View, Text, Pressable, Alert } from 'react-native';

export default function PressableDisabled() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20 }}>

      <Pressable
        disabled={false}
        onPress={() => Alert.alert('Success', 'Button is enabled!')}
        style={{
          backgroundColor: 'green',
          padding: 15,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>
          Enabled Button
        </Text>
      </Pressable>

      <Pressable
        disabled={true}
        onPress={() => Alert.alert('Disabled')}
        style={{
          backgroundColor: 'gray',
          padding: 15,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>
          Disabled Button
        </Text>
      </Pressable>

    </View>
  );
}
