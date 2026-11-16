
import React from 'react';
import { View, Button, Alert } from 'react-native';

export default function ButtonOnPress() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Button
        title="Click Me"
        onPress={() => Alert.alert('Success', 'Button Pressed!')}
      />
    </View>
  );
}
