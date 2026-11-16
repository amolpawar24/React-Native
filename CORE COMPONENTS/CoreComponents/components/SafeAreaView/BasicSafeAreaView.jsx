
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';

export default function BasicSafeAreaView() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'lightblue' }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 22 }}>
          SafeAreaView Example
        </Text>

        <Text style={{ fontSize: 16, marginTop: 10 }}>
          Content inside the safe area.
        </Text>
      </View>
    </SafeAreaView>
  );
}
