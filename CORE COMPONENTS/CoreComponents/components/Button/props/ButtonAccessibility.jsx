
import React from 'react';
import { View, Button } from 'react-native';

export default function ButtonAccessibility() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Button
        title="Save"
        accessibilityLabel="Save your information"
        onPress={() => console.log('Information Saved')}
      />
    </View>
  );
}
