
import React from 'react';
import { View, Button } from 'react-native';

export default function ButtonDisabled() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20, gap: 15 }}>
      <Button
        title="Enabled Button"
        disabled={false}
        onPress={() => console.log('Enabled')}
      />

      <Button
        title="Disabled Button"
        disabled={true}
        onPress={() => console.log('Disabled')}
      />
    </View>
  );
}
