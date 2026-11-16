
import React, { useState } from 'react';
import { View, Text, Button, Modal, Alert } from 'react-native';

export default function ModalOnShow() {
  const [visible, setVisible] = useState(false);

  const handleShow = () => {
    Alert.alert('Modal Opened', 'The Modal is now visible!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Button
        title="Open Modal"
        onPress={() => setVisible(true)}
      />

      <Modal
        visible={visible}
        onShow={handleShow}
        onRequestClose={() => setVisible(false)}
      >
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
