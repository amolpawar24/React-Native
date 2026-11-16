
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function PagingEnabled() {
  return (
    <ScrollView
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
    >

      <View
        style={{
          width: screenWidth,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#DBEAFE',
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
          Page 1
        </Text>
      </View>

      <View
        style={{
          width: screenWidth,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#DCFCE7',
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
          Page 2
        </Text>
      </View>

      <View
        style={{
          width: screenWidth,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FCE7F3',
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
          Page 3
        </Text>
      </View>

    </ScrollView>
  );
}
