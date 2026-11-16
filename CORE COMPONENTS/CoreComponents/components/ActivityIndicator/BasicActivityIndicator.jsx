
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default function BasicActivityIndicator() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator />

      <Text style={{ marginTop: 10, fontSize: 18 }}>
        Loading...
      </Text>
    </View>
  );
}
