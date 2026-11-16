
import React from 'react';
import { View, Text, StatusBar } from 'react-native';

export default function BasicStatusBar() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <StatusBar />

      <Text style={{ fontSize: 20 }}>
        StatusBar Example
      </Text>

    </View>
  );
}
