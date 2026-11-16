
import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';

export default function ModalAnimationType() {
    
    // states
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Button
        title="Open Modal"
        onPress={() => setVisible(true)}
      />

      <Modal
        visible={visible}
        // animationType="slide"
        // animationType='fade'
        animationType='none'
        onRequestClose={() => setVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 22, marginBottom: 15 }}>
            Modal Animation Example
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
