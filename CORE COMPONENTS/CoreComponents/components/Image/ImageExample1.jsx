import React from 'react'
import { Image, View } from 'react-native'

// ? It is not recommended to render image without View Component.
export default function ImageExample1() {
  return (
    <>
        <View>
            <Image source={require('../../assets/splash-icon.png')} style={{width: 100, height: 100}}/>
        </View>
    </>
  )
}
