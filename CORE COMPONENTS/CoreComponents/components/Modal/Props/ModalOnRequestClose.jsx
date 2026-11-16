
import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';

export default function ModalOnRequestClose() {
  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Button
        title="Open Modal"
        onPress={() => setVisible(true)}
      />

      <Modal
        visible={visible}
        onRequestClose={handleClose}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 22, marginBottom: 15 }}>
            Modal is Open
          </Text>

          <Button
            title="Close Modal"
            onPress={handleClose}
          />
        </View>
      </Modal>

    </View>
  );
}
