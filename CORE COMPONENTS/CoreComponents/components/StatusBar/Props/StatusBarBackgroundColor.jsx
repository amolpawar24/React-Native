
import React from 'react';
import { View, Text, StatusBar } from 'react-native';

export default function StatusBarBackgroundColor() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <StatusBar
        backgroundColor="blue"
        barStyle="light-content"
      />

      <Text style={{ fontSize: 20 }}>
        StatusBar Background Color Example
      </Text>
    </View>
  );
}
