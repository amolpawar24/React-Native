
import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';

export default function ModalVisible() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Button
        title="Open Modal"
        onPress={() => setVisible(true)}
      />

      <Modal visible={visible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 22, marginBottom: 15 }}>
            Welcome to Modal!
          </Text>

          <Button
            title="Close Modal"
            onPress={() => setVisible(false)}
          />
        </View>
      </Modal>

    </View>
  );
}
