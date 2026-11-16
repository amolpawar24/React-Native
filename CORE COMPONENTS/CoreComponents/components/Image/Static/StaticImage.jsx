
import React from 'react'
import { Image, View } from 'react-native'

export default function StaticImage() {
  return (
    <View>
        <Image source={ require("../../../assets/splash-icon.png")} style={{ height: 800, width: 390 }}/>
    </View>
  )
}
