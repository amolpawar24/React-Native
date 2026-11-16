
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function NestedScroll() {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>

      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 15 }}>
        Nested ScrollView Example
      </Text>

      {/* Outer ScrollView Content */}

      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Outer ScrollView
      </Text>

      <Text style={{ padding: 15, backgroundColor: '#E2E8F0' }}>
        Outer Item 1
      </Text>

      <Text style={{ padding: 15, backgroundColor: '#E2E8F0' }}>
        Outer Item 2
      </Text>

      {/* Inner ScrollView */}

      <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 15 }}>
        Inner ScrollView
      </Text>

      <ScrollView
        nestedScrollEnabled={true}
        style={{ height: 200, backgroundColor: '#DBEAFE' }}
      >
        <Text style={{ padding: 15 }}>Inner Item 1</Text>
        <Text style={{ padding: 15 }}>Inner Item 2</Text>
        <Text style={{ padding: 15 }}>Inner Item 3</Text>
        <Text style={{ padding: 15 }}>Inner Item 4</Text>
        <Text style={{ padding: 15 }}>Inner Item 5</Text>
        <Text style={{ padding: 15 }}>Inner Item 6</Text>
        <Text style={{ padding: 15 }}>Inner Item 7</Text>
        <Text style={{ padding: 15 }}>Inner Item 8</Text>
        <Text style={{ padding: 15 }}>Inner Item 9</Text>
        <Text style={{ padding: 15 }}>Inner Item 10</Text>
      </ScrollView>

      {/* Remaining Outer ScrollView Content */}

      <Text style={{ fontSize: 18, marginVertical: 15 }}>
        Remaining Outer Items
      </Text>

      <Text style={{ padding: 15, backgroundColor: '#E2E8F0' }}>
        Outer Item 3
      </Text>

      <Text style={{ padding: 15, backgroundColor: '#E2E8F0' }}>
        Outer Item 4
      </Text>

      <Text style={{ padding: 15, backgroundColor: '#E2E8F0' }}>
        Outer Item 5
      </Text>

      <Text style={{ padding: 15, backgroundColor: '#E2E8F0' }}>
        Outer Item 6
      </Text>

      <Text style={{ padding: 15, backgroundColor: '#E2E8F0' }}>
        Outer Item 7
      </Text>

    </ScrollView>
  );
}
