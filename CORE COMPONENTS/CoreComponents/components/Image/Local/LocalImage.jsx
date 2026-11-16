
import React from 'react'
import { Image, View } from 'react-native'

export default function LocalImage() {
  return (
    <View>
        <Image source={ require("../../../assets/images/vertical-orange-lily-field-cloudy-dark-sky.jpg")} style={{ height: 800, width: 390 }}/>
    </View>
  )
}
