
import React from 'react';
import { View, Text, StatusBar } from 'react-native';

export default function StatusBarHidden() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StatusBar hidden={true} />

      <Text style={{ fontSize: 20 }}>
        StatusBar Hidden Example
      </Text>
    </View>
  );
}
