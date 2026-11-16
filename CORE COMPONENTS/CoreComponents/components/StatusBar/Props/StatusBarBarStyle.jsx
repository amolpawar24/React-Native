
import React from 'react';
import { View, Text, StatusBar } from 'react-native';

export default function StatusBarBarStyle() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <StatusBar barStyle="dark-content" />

      <Text style={{ fontSize: 20 }}>
        StatusBar Example
      </Text>
    </View>
  );
}
