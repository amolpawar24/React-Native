
import React, { useState } from 'react';
import { View, Text, Button, Modal, Alert } from 'react-native';

export default function ModalOnDismiss() {
  const [visible, setVisible] = useState(false);

  const handleDismiss = () => {
    Alert.alert('Modal Closed', 'The Modal has been dismissed!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Button
        title="Open Modal"
        onPress={() => setVisible(true)}
      />

      <Modal
        visible={visible}
        animationType="slide"
        onDismiss={handleDismiss}
        onRequestClose={() => setVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 22, marginBottom: 15 }}>
            Modal is Open
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
