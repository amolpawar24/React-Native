
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function DisableScroll() {
  return (
    <View style={{ flex: 1, padding: 20 }}>

      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 15 }}>
        Disable Scroll Example
      </Text>

      <ScrollView scrollEnabled={false}>

        <Text style={{ fontSize: 20, padding: 15 }}>Item 1</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 2</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 3</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 4</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 5</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 6</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 7</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 8</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 9</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 10</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 11</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 12</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 13</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 14</Text>
        <Text style={{ fontSize: 20, padding: 15 }}>Item 15</Text>

      </ScrollView>

    </View>
  );
}
