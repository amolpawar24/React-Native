
import React from 'react';
import { View, Button, Alert } from 'react-native';

export default function MultipleButtons() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20, gap: 15 }}>
      <Button
        title="Save"
        onPress={() => Alert.alert('Saved', 'Your data has been saved.')}
      />

      <Button
        title="Delete"
        color="red"
        onPress={() => Alert.alert('Deleted', 'Your data has been deleted.')}
      />

      <Button
        title="Cancel"
        color="gray"
        onPress={() => Alert.alert('Cancelled', 'Action cancelled.')}
      />
    </View>
  );
}
