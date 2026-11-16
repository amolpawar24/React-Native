
import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';

export default function TransparentModal() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Button title="Open Modal" onPress={() => setVisible(true)} />

      <Modal
        visible={visible}
        transparent={true}
      >
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
          <View style={{ backgroundColor: 'white', padding: 30, borderRadius: 10 }}>
            <Text style={{ fontSize: 20, marginBottom: 15 }}>
              Transparent Modal
            </Text>

            <Button title="Close" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>

    </View>
  );
}
