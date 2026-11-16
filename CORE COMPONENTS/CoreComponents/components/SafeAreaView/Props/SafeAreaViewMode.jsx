
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SafeAreaViewMode() {
  return (
    <SafeAreaView
      mode="padding"
      edges={['top', 'bottom']}
      style={{
        flex: 1,
        backgroundColor: 'lightblue',
      }}
    >
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 22 }}>
          SafeAreaView Mode Example
        </Text>

        <Text style={{ fontSize: 16, marginTop: 10 }}>
          Safe area is applied using padding.
        </Text>
      </View>
    </SafeAreaView>
  );
}
