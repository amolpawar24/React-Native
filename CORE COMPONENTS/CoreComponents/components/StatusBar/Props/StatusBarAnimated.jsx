
import React, { useState } from 'react';
import { View, Text, Button, StatusBar } from 'react-native';

export default function StatusBarAnimated() {
  const [isBlue, setIsBlue] = useState(true);

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
        animated={true}
        backgroundColor={isBlue ? 'blue' : 'green'}
        barStyle="light-content"
      />

      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        StatusBar Animated Example
      </Text>

      <Button
        title="Change Status Bar Color"
        onPress={() => setIsBlue(!isBlue)}
      />
    </View>
  );
}
