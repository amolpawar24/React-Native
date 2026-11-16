
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function HorizontalScroll() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>

      <ScrollView
        horizontal
        style={{ width: '100%', flexGrow: 0 }}
        contentContainerStyle={{ flexDirection: 'row' }}
        showsHorizontalScrollIndicator={true}
      >

        <View style={{ width: 150, padding: 20, backgroundColor: 'lightblue' }}>
          <Text>Item 1</Text>
        </View>

        <View style={{ width: 150, padding: 20, backgroundColor: 'lightgreen' }}>
          <Text>Item 2</Text>
        </View>

        <View style={{ width: 150, padding: 20, backgroundColor: 'lightpink' }}>
          <Text>Item 3</Text>
        </View>

        <View style={{ width: 150, padding: 20, backgroundColor: 'lightyellow' }}>
          <Text>Item 4</Text>
        </View>

        <View style={{ width: 150, padding: 20, backgroundColor: 'lightblue' }}>
          <Text>Item 5</Text>
        </View>

        <View style={{ width: 150, padding: 20, backgroundColor: 'lightgreen' }}>
          <Text>Item 6</Text>
        </View>

        <View style={{ width: 150, padding: 20, backgroundColor: 'lightpink' }}>
          <Text>Item 7</Text>
        </View>

      </ScrollView>

    </View>
  );
}
