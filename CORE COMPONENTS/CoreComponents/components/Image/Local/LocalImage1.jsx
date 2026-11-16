
import React from 'react'
import { Image, View } from 'react-native'

import img from "../../../assets/images/pexels-ankit-rainloure-1425442-35771810.jpg"

export default function LocalImage1() {
  return (
    <View>
        <Image source={img} style={{ height: 800, width: 390 }}/>
    </View>
  )
}
