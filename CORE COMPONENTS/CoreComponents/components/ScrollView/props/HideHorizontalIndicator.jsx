
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function HideHorizontalIndicator() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>

      <Text style={{ fontSize: 22, fontWeight: 'bold', margin: 15 }}>
        Hide Horizontal Indicator
      </Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >

        <View style={{ padding: 20, backgroundColor: '#DBEAFE', margin: 5 }}>
          <Text>Item 1</Text>
        </View>

        <View style={{ padding: 20, backgroundColor: '#DCFCE7', margin: 5 }}>
          <Text>Item 2</Text>
        </View>

        <View style={{ padding: 20, backgroundColor: '#FCE7F3', margin: 5 }}>
          <Text>Item 3</Text>
        </View>

        <View style={{ padding: 20, backgroundColor: '#FEF3C7', margin: 5 }}>
          <Text>Item 4</Text>
        </View>

        <View style={{ padding: 20, backgroundColor: '#DBEAFE', margin: 5 }}>
          <Text>Item 5</Text>
        </View>

        <View style={{ padding: 20, backgroundColor: '#DCFCE7', margin: 5 }}>
          <Text>Item 6</Text>
        </View>

        <View style={{ padding: 20, backgroundColor: '#FCE7F3', margin: 5 }}>
          <Text>Item 7</Text>
        </View>

        <View style={{ padding: 20, backgroundColor: '#FEF3C7', margin: 5 }}>
          <Text>Item 8</Text>
        </View>

      </ScrollView>

    </View>
  );
}
