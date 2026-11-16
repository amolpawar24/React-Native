
import React from 'react';
import { View, Button } from 'react-native';

export default function ButtonTitle() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Button
        title="Submit"
        onPress={() => console.log('Submitted')}
      />
    </View>
  );
}
