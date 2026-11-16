
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SafeAreaViewOnLayout() {
  const handleLayout = (event) => {
    const { width, height, x, y } = event.nativeEvent.layout;

    console.log('Width:', width);
    console.log('Height:', height);
    console.log('X Position:', x);
    console.log('Y Position:', y);
  };

  return (
    <SafeAreaView
      edges={['top', 'bottom']}
      style={{
        flex: 1,
        backgroundColor: 'lightblue',
      }}
      onLayout={handleLayout}
    >
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 22 }}>
          SafeAreaView onLayout Example
        </Text>

        <Text style={{ fontSize: 16, marginTop: 10 }}>
          Check the console to see layout dimensions.
        </Text>
      </View>
    </SafeAreaView>
  );
}
