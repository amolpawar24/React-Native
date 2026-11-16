
import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';

export default function ModalTransparent() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Button
        title="Open Modal"
        onPress={() => setVisible(true)}
      />

      <Modal
        visible={visible}
        transparent={true}
        animationType="fade"
      >
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
          <View style={{
            backgroundColor: 'white',
            padding: 25,
            borderRadius: 10,
          }}>
            <Text style={{ fontSize: 20, marginBottom: 15 }}>
              Transparent Modal
            </Text>

            <Button
              title="Close Modal"
              onPress={() => setVisible(false)}
            />
          </View>
        </View>
      </Modal>

    </View>
  );
}
