
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default function ActivityIndicatorSize() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Small Spinner
      </Text>

      <ActivityIndicator size="small" color="blue" />

      <Text style={{ fontSize: 18, marginVertical: 10 }}>
        Large Spinner
      </Text>

      <ActivityIndicator size="large" color="green" />

      <Text style={{ fontSize: 18, marginVertical: 10 }}>
        Custom Size (Android)
      </Text>

      <ActivityIndicator size={50} color="red" />
    </View>
  );
}
