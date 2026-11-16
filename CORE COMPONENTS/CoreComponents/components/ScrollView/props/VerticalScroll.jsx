
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function VerticalScroll() {
  return (
    <View style={{ flex: 1, padding: 20 }}>

      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 15 }}>
        Vertical ScrollView Example
      </Text>

      <ScrollView showsVerticalScrollIndicator={true}>

        <Text style={{ fontSize: 20, padding: 15, backgroundColor: '#E2E8F0' }}>Item 1</Text>
        <Text style={{ fontSize: 20, padding: 15, backgroundColor: '#F1F5F9' }}>Item 2</Text>
        <Text style={{ fontSize: 20, padding: 15, backgroundColor: '#E2E8F0' }}>Item 3</Text>
        <Text style={{ fontSize: 20, padding: 15, backgroundColor: '#F1F5F9' }}>Item 4</Text>
        <Text style={{ fontSize: 20, padding: 15, backgroundColor: '#E2E8F0' }}>Item 5</Text>
        <Text style={{ fontSize: 20, padding: 15, backgroundColor: '#F1F5F9' }}>Item 6</Text>
        <Text style={{ fontSize: 20, padding: 15, backgroundColor: '#E2E8F0' }}>Item 7</Text>
        <Text style={{ fontSize: 20, padding: 15, backgroundColor: '#F1F5F9' }}>Item 8</Text>
        <Text style={{ fontSize: 20, padding: 15, backgroundColor: '#E2E8F0' }}>Item 9</Text>
        <Text style={{ fontSize: 20, padding: 15, backgroundColor: '#F1F5F9' }}>Item 10</Text>
        <Text style={{ fontSize: 20, padding: 15, backgroundColor: '#E2E8F0' }}>Item 11</Text>
        <Text style={{ fontSize: 20, padding: 15, backgroundColor: '#F1F5F9' }}>Item 12</Text>
        <Text style={{ fontSize: 20, padding: 15, backgroundColor: '#E2E8F0' }}>Item 13</Text>
        <Text style={{ fontSize: 20, padding: 15, backgroundColor: '#F1F5F9' }}>Item 14</Text>
        <Text style={{ fontSize: 20, padding: 15, backgroundColor: '#E2E8F0' }}>Item 15</Text>
        <Text style={{ fontSize: 20, padding: 15, backgroundColor: '#F1F5F9' }}>Item 16</Text>
        <Text style={{ fontSize: 20, padding: 15, backgroundColor: '#E2E8F0' }}>Item 17</Text>
        <Text style={{ fontSize: 20, padding: 15, backgroundColor: '#F1F5F9' }}>Item 18</Text>
        <Text style={{ fontSize: 20, padding: 15, backgroundColor: '#E2E8F0' }}>Item 19</Text>
        <Text style={{ fontSize: 20, padding: 15, backgroundColor: '#F1F5F9' }}>Item 20</Text>

      </ScrollView>

    </View>
  );
}
