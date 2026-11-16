
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default function ActivityIndicatorColor() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator color="blue" />

      <Text style={{ fontSize: 18, marginTop: 10 }}>
        Loading...
      </Text>
    </View>
  );
}
