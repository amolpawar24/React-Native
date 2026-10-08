
import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export default function ActivityIndicatorColor() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "plum", padding: 50}}>
        <ActivityIndicator color={'red'} />
      </View>
    </>
  )
}
