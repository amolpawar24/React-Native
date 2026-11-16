
import React from 'react';
import { View, Text, StatusBar } from 'react-native';

export default function StatusBarTranslucent() {
  return (
    <View style={{ flex: 1 }}>

      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <View
        style={{
          flex: 1,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 20 }}>
          Content Behind Status Bar
        </Text>
      </View>

    </View>
  );
}
